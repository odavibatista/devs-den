'use client'
import JobCard from '@/presentation/components/job-card';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import getJobs from '@/api/routes/jobs/getJobs';
import { IGetJob } from '@/api/routes/jobs/getSingleJob';

export default function JobsScreen() {
    const [jobs, setJobs] = useState<IGetJob[]>([])
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
  
    return (
      <main className={styles.main}>
        <div>
            <h1 className={styles.h1}>DESCOBRIR VAGAS</h1>
        </div>
        <section className={styles.section}>
            {
              jobs && jobs?.map((job) => {
                return (
                  <JobCard key={job.id} title={job.title} wage={job.wage} modality={job.modality}/>
                )
              })
            }
        </section>
      </main>
    );
  }
  