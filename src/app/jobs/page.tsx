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
            const response = await getJobs()
    
            if ("statusCode" in response) {
                console.log(response)
            } 
            else {
              setJobs(response);
              setJobsLoading(false);
            }
        })();
      }, []);
  
    return (
      <main className={styles.section}>
        <div>
            <h1>VAGAS</h1>
        </div>
        <section>
            {
                jobs?.map((job) => {
                    if(jobs.length === 0){
                        return <h1>Não há vagas disponíveis no momento. Tente mais tarde.</h1>
                    } else  {
                        return <JobCard key={job.id} title={job.title} wage={job.wage} modality={job.modality}/>
                    }
                })
            }
        </section>
      </main>
    );
  }
  