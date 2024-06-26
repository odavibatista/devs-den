"use client";

import JobCard from "@/presentation/components/job-card";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import getJobs, { IGetJob } from "@/api/endpoints/jobs/getJobs.endpoint";
import XLink from "@/presentation/components/xlink";
import LoadingScreen from "@/presentation/components/loadingScreen";
import { useHome } from "@/providers/home-data-provider";
import Button from "@/presentation/components/button";
import { useModal } from "@/presentation/hooks/useModal";
import { useRouter } from "next/navigation";
import Modal from "@/presentation/components/modal";

export default function JobsScreen() {
  const [jobs, setJobs] = useState<IGetJob[]>([]);
  const [isJobsLoading, setJobsLoading] = useState<boolean>(true);

  const { homeData } = useHome();

  const { modal, openCloseModal, setModal } = useModal();

  const router = useRouter();

  function handleClickUnlogged(id: number) {
    if (homeData?.role === "candidate" || homeData?.role === "company") {
      router.push(`/job/${id}`);
    } else {
      setModal({
        message: "Você precisa estar logado para ver detalhes de vagas.",
        type: "error",
      });
    }
  }

  useEffect(() => {
    (async () => {
      const data = await getJobs();

      if ("status" in data) {
        setJobsLoading(false);
      } else {
        setJobs(data);
        setJobsLoading(false);
      }
    })();
  }, []);

  if (isJobsLoading === true) {
    return (
      <>
        <LoadingScreen gradient="green" />
      </>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <>
        <main className={styles.error}>
          <h1>Parece que não há vagas abertas no momento.</h1>
          {homeData && homeData.role === "candidate" ? (
            <h1>Tente novamente mais tarde.</h1>
          ) : (
            <XLink href="/new-job">
              <h1 className={styles.register_text}>
                Seja o primeiro a cadastrar uma!
              </h1>
            </XLink>
          )}
        </main>
      </>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.header_main}>
        <h1 className={styles.h1}>DESCOBRIR VAGAS</h1>
        {homeData?.role === "company" ? (
          <XLink href="/new-job">
            <div className={styles.company_open_job}>
              <Button text="ABRIR VAGA" />
            </div>
          </XLink>
        ) : (
          <></>
        )}
      </div>
      <section className={styles.section}>
        {jobs &&
          jobs?.map((job) => {
            return (
              <div
                onClick={() => handleClickUnlogged(job.id_job)}
                className={styles.job_card}
              >
                <JobCard
                  key={job.id_job}
                  title={job.title}
                  wage={job.wage}
                  modality={job.modality}
                />
              </div>
            );
          })}
      </section>
      {modal?.message !== "" && (
        <Modal modal={modal} openCloseModal={openCloseModal} />
      )}
    </main>
  );
}
