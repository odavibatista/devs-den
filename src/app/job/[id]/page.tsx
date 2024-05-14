'use client'
import getSingleJob, { IGetJob } from "@/api/routes/jobs/getSingleJob"
import JobCard from "@/presentation/components/job-card";
import { DynamicRoute } from "@/server/utils/dynamic.route";
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreen from "@/presentation/components/loadingScreen";
import styles from './styles.module.scss'

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
          <LoadingScreen />
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
      return  (
        <main className={styles.main}>
          <JobCard title={job.title} modality={job.modality} wage={job.wage} key={job.id} />
        </main>
      )
    }
}