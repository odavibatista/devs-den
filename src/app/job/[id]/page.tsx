'use client'
import getSingleJob, { IGetJob } from "@/api/routes/jobs/getSingleJob"
import { DynamicRoute } from "@/server/utils/dynamic.route";
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreen from "@/presentation/components/loadingScreen";
import styles from './styles.module.scss'
import { jobModalityParser } from "@/server/utils/job-modality.parser";
import XLink from "@/presentation/components/xlink";
import Emphasis from "@/presentation/components/emphasis";
import { useHome } from "@/providers/home-data-provider";
import Button from "@/presentation/components/button";

export default function JobPage ({params}: DynamicRoute)   {
    const [job, setJob] = useState<IGetJob>()
    const [isJobLoading, setJobLoading] = useState<boolean>(true);
    const [userRole, setUserRole] = useState<string | null>(null);

    const { homeData, isHomeDataLoading } = useHome();

    const jobId = Number(params.id)

    useEffect(() => {
      (async () => {
        if (homeData && !isHomeDataLoading) {
          setUserRole(homeData?.role)

          console.log(userRole)
        }
      })()
    })

    useEffect(() => {
        (async () => {


          const data = await getSingleJob(jobId)
    
          if ("status" in data) {
            setJobLoading(false)
          } else {
            setJob(data)
            setJobLoading(false)
          }
        })()
      }, [jobId])

    if (isJobLoading === true) {
      return  (
        <>
          <LoadingScreen gradient="green" />
        </>
      )
    }

    if (!job) {
      return  (
        <>
          <main className={styles.error}>
            <h1>A vaga que você encontrou não existe. Que tal buscar <XLink href="/jobs"><Emphasis color="light_blue" text="outras" /></XLink>?</h1>
          </main>
        </>
      )
    } 
  
    else  {
      jobModalityParser(job)

      return  (
        <main className={styles.main}>
          <h1 className={styles.job_title}>
            {job.job.title}
          </h1>
          <h4 className={styles.job_category}>
            {job.job.job_category.name}
          </h4>
          <h6 className={styles.job_modality}>
            {job.job.modality} - {job.job.contract}
          </h6>

          <div className={styles.splitter_small}></div>

          <h4 className={styles.job_company}>
            {job.company.name}
          </h4>
          <h5 className={styles.job_wage}>
            R$ {job.job.wage.toFixed(2)}
          </h5>

          <div className={styles.splitter_large}></div>
          
          <p className={styles.job_desc}>
            {job.job.description}
          </p>

          {
            userRole === "candidate" ? <Button size="medium" text="CANDIDATAR-SE" /> : null
          }

          {
            userRole === "company" && homeData?.id === job.company.id_company ? <Button size="small" text="EDITAR VAGA" /> : null
          }

        </main>
      )
    }
}