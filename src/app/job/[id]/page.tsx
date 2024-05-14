'use client'
import getSingleJob, { IGetJob } from "@/api/routes/jobs/getSingleJob"
import { DynamicRoute } from "@/server/utils/dynamic.route";
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreen from "@/presentation/components/loadingScreen";
import styles from './styles.module.scss'
import { jobModalityParser } from "@/server/utils/job-modality.parser";

export default function JobPage ({params}: DynamicRoute)   {
    const [job, setJob] = useState<IGetJob>()
    const [isJobLoading, setJobLoading] = useState<boolean>(true);


    useEffect(() => {
        (async () => {
          const data = await getSingleJob(Number(params.id))
    
          if ("statusCode" in data) {
            console.log(data)
          } else {
            setJob(data)
            setJobLoading(false)
          }
        })()
      }, [Number(params.id)])

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
          <p>PIIIIIIIIIIIIIII</p>
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
            {job.job.modality}
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
        </main>
      )
    }
}