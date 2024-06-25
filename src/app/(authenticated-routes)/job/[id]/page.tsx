"use client";
import { DynamicRoute } from "@/server/utils/dynamic.route";
import { useEffect, useState } from "react";
import LoadingScreen from "@/presentation/components/loadingScreen";
import styles from "./styles.module.scss";
import { jobModalityParser } from "@/server/utils/job-modality.parser";
import XLink from "@/presentation/components/xlink";
import Emphasis from "@/presentation/components/emphasis";
import { useHome } from "@/providers/home-data-provider";
import Button from "@/presentation/components/button";
import getSingleJob, {
  IGetJob,
} from "@/api/endpoints/jobs/getSingleJob.endpoint";
import { useModal } from "@/presentation/hooks/useModal";
import removeJob from "@/api/endpoints/jobs/removeJob.endpoint";
import candidateGetJobStatus from "@/api/endpoints/candidates/candidateGetJobStatus.endpoint";
import applyToJob from "@/api/endpoints/candidates/applyToJob.endpoint";
import { useRouter } from "next/navigation";
import removeApplication from "@/api/endpoints/candidates/removeApplication.endpoint";
import Modal from "@/presentation/components/modal";

export default function JobPage({ params }: DynamicRoute) {
  const [job, setJob] = useState<IGetJob>();
  const [isJobLoading, setJobLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [confirmMessage, setConfirmMessage] = useState<string>("");
  const [isApplied, setIsApplied] = useState<boolean>();

  const { homeData, isHomeDataLoading } = useHome();

  const jobId = Number(params.id);

  const { modal, setModal, openCloseModal } = useModal();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (homeData && !isHomeDataLoading) {
        setUserRole(homeData?.role);
      }
    })();
  });

  useEffect(() => {
    (async () => {
      const data = await getSingleJob(jobId);

      if ("status" in data) {
        setJobLoading(false);
      } else {
        setJob(data);
        setJobLoading(false);
      }
    })();
  }, [jobId]);

  useEffect(() => {
    (async () => {
      if (homeData && !isHomeDataLoading) {
        const token = sessionStorage.getItem("session");

        if (!token) return;

        const data = await candidateGetJobStatus(token, jobId);

        if ("status" in data) {
          console.error(data);
        } else {
          setIsApplied(data.has_applied);
        }
      }
    })();
  });

  const handleRemoveJob = async () => {
    const token = sessionStorage.getItem("session");

    if (!token) return;

    await removeJob(token, jobId);

    router.push("/jobs");

    setModal({ message: "Vaga removida com sucesso.", type: "success" });
  };

  const handleApplyToJob = async () => {
    const token = sessionStorage.getItem("session");

    if (!token) return;

    await applyToJob(token, jobId);

    router.refresh();

    setModal({
      message: "Candidatura realizada com sucesso!",
      type: "success",
    });
  };

  const handleRemoveApplication = async () => {
    const token = sessionStorage.getItem("session");

    if (!token) return;

    await removeApplication(token, jobId);

    router.refresh();

    setModal({ message: "Candidatura removida com sucesso.", type: "success" });
  };

  if (isJobLoading === true) {
    return (
      <>
        <LoadingScreen gradient="green" />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <main className={styles.error}>
          <h1>
            A vaga que você encontrou não existe. Que tal buscar{" "}
            <XLink href="/jobs">
              <Emphasis color="light_blue" text="outras" />
            </XLink>
            ?
          </h1>
        </main>
      </>
    );
  } else {
    jobModalityParser(job);

    return (
      <main className={styles.main}>
        <h1 className={styles.job_title}>{job.job.title}</h1>
        <h4 className={styles.job_category}>{job.job.job_category.name}</h4>
        <h6 className={styles.job_modality}>
          {job.job.modality} - {job.job.contract}
        </h6>

        <div className={styles.splitter_small}></div>

        <h4 className={styles.job_company}>{job.company.name}</h4>
        <h5 className={styles.job_wage}>R$ {job.job.wage.toFixed(2)}</h5>

        <div className={styles.splitter_large}></div>

        <p className={styles.job_desc}>{job.job.description}</p>

        {userRole && userRole === "candidate" && isApplied === false ? (
          <div className={styles.apply_button_div}>
            <Button text="CANDIDATAR-SE" onClick={handleApplyToJob} />
          </div>
        ) : userRole && userRole === "candidate" && isApplied === true ? (
          <div className={styles.apply_button_div}>
            <Button text="DESISTIR" onClick={handleRemoveApplication} />
          </div>
        ) : null}

        {userRole === "company" && homeData?.id === job.company.id_company ? (
          <section className={styles.company_div}>
            {/* <div className={styles.edit_button_div}>
                <Button text="EDITAR VAGA" />
              </div>  */}
            <div className={styles.edit_button_div}>
              <Button text="REMOVER VAGA" onClick={handleRemoveJob} />
            </div>
          </section>
        ) : null}

        {modal?.message !== "" && (
          <Modal modal={modal} openCloseModal={openCloseModal} />
        )}
      </main>
    );
  }
}
