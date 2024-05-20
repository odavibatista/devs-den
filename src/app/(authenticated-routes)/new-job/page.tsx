'use client'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import LoadingScreen from '@/presentation/components/loadingScreen';
import { useHome } from '@/providers/home-data-provider';
import { IGetCategory } from '@/api/endpoints/job-categories/getCategory.endpoint';
import getCategories from '@/api/endpoints/job-categories/getCategories.endpoint';
import { useRouter } from 'next/navigation';
import createJob from '@/api/endpoints/jobs/createJob.endpoint';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const createJobSchema = z.object({
  title: z.string().min(14, { message: 'Campo obrigatório.' }),
  description: z.string().min(50, { message: 'Campo obrigatório.' }),
  job_category_id: z.string().min(1, { message: 'Campo obrigatório.' }),
  wage: z.number().min(4, { message: 'Campo obrigatório.' }),
  modality: z.string().min(4, { message: 'Campo obrigatório.' }),
  contract: z.string().min(3, { message: 'Campo obrigatório.' })
})

type CreateJobSchemaInterface = z.infer<typeof createJobSchema>

export default function NewJobScreen() {
    const [categories, setCategories] = useState<IGetCategory[]>([])
    const [isCategoriesLoading, setCategoriesLoading] = useState<boolean>(true);
    const [companyId, setCompanyId] = useState<number>()
    const [isCompanyIdLoading, setCompanyIdLoading] = useState<boolean>(true);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState('')
    const [createJobData, setCreateJobData] = useState<CreateJobSchemaInterface>()

    const { homeData, isHomeDataLoading } = useHome();

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<CreateJobSchemaInterface>({
      resolver: zodResolver(createJobSchema),
      mode: 'all',
    })

    async function onSubmit (data: CreateJobSchemaInterface) {
      setCreateJobData(data)
    }

    function setError(message: string) {
        setErrorMessage(message)
    }

    const router = useRouter()
  
    useEffect(() => {
      (async () => {
        if (homeData && !isHomeDataLoading) {
          setCompanyId(homeData?.id)
          setUserRole(homeData?.role)
        }

      })()
    })

    useEffect(() => {
      (async () => {
        const data = await getCategories()
  
        if ("status" in data) {
            console.error(data)
        } 
        
        else {
          setCategories(data)

          setCompanyIdLoading(false)
          setCategoriesLoading(false)
        }
      })()
    }, [])

    useEffect(() => {
      (async () => {
          if (createJobData !== undefined) {
            try {
              
            } catch(error: any){
              setError("Deu ruim")
              alert(errorMessage)
            }
          }
          setCreateJobData(undefined)
      })()
    })

    if (isCategoriesLoading === true || isCompanyIdLoading === true) {
      return  (
        <>
          <LoadingScreen gradient='green' />
        </>
      )
    }

    if (!categories || categories.length === 0) {
        return  (
          <>
            <main className={styles.error}>
              <h1>Ocorreu um erro. Tente novamente mais tarde.</h1>
            </main>
          </>
        )
    } 

    if (!userRole || userRole !== "company")  {
      return  (
        <>
          <main className={styles.error}>
            <h1>Você não tem permissão para acessar este recurso.</h1>
          </main>
        </>
      )
    }

    return (
        <main className={styles.main}>
          <div>
              <h1 className={styles.h1}>ABRIR VAGA</h1>
              <h4 className={styles.h4}>Preencha o formulário abaixo para abrir a vaga desejada.</h4>
          </div>
          <section className={styles.section}>
          </section>
        </main>
      );
}  