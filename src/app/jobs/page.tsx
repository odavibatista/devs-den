'use client'
import JobCard from '@/presentation/components/job-card';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import getJobs, { IGetJobs } from '@/api/routes/jobs/getJobs';
import XLink from '@/presentation/components/xlink';
import LoadingScreen from '@/presentation/components/loadingScreen';

export default function JobsScreen() {
    const [jobs, setJobs] = useState<IGetJobs[]>([])
    const [isJobsLoading, setJobsLoading] = useState<boolean>(true);


    useEffect(() => {
      (async () => {
        const data = await getJobs()

        if ("statusCode" in data) {
          console.error(data)
        } else {
          setJobs(data)
          setJobsLoading(false)
        }
      })()
    }, [])

    if (isJobsLoading === true) {
      return  (
        <>
          <LoadingScreen gradient='green' />
        </>
      )
    }

    if (!jobs) {
      return  (
        <>
          <p>PIIIIIIIIIIIIIII</p>
        </>
      )
    } 
  
    return (
      <main className={styles.main}>
        <div>
            <h1 className={styles.h1}>DESCOBRIR VAGAS</h1>
        </div>
        <section className={styles.section}>
            {
              jobs && jobs?.map((job) => {
                return (
                  <XLink href={`/job/${job.id_job}`}>
                    <JobCard key={job.id_job} title={job.title} wage={job.wage} modality={job.modality}/>
                  </XLink>
                )
              })
            }
        </section>
      </main>
    );
  }
  