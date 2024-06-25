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
import Select from '@/presentation/components/select';
import Input from "@/presentation/components/input"
import Button from '@/presentation/components/button';
import { useModal } from '@/presentation/hooks/useModal';

const createJobSchema = z.object({
  title: z.string().min(14, { message: 'Campo obrigatório.' }),
  description: z.string().min(10, { message: 'Campo obrigatório.' }),
  job_category_id: z.string().min(1, { message: 'Campo obrigatório.' }),
  wage: z.string().min(4, { message: 'Campo obrigatório.' }),
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

    const { modal, setModal, openCloseModal } = useModal()

    const categoriesList = categories.map(category => {
      return {
          name: category.name,
          value: category.id_category
      }
    })

    const contractsList = [
      {
        name: "CLT",
        value: "clt"
      },

      {
        name: "PJ",
        value: "pj"
      },

      {
        name: "Estágio",
        value: "intern"
      }
    ]

    const modalitiesList = [
      {
        name: "Presencial",
        value: "presential"
      },

      {
        name: "Híbrido",
        value: 'hybrid'
      },

      {
        name: "Remoto",
        value: "remote"
      }
    ]

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
          setErrorMessage(data.message)

          setModal({ message: errorMessage, type: 'error'})
          return
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
              const token = sessionStorage.getItem("session")

              if (!token ) return

              const newJobData = await createJob(token, {
                title: createJobData.title,
                description: createJobData.description,
                job_category_id: +createJobData.job_category_id,
                wage: +createJobData.wage,
                modality: createJobData.modality as "presential" | "hybrid" | "remote",
                contract: createJobData.contract as "clt" | "pj" | "intern",
              })

              if ("status" in newJobData) {
                setError(newJobData.message)
                setModal({ message: errorMessage, type: 'error'})
                setCreateJobData(undefined)

                return
              } else  {
                setModal({ message: 'Vaga criada com sucesso!', type: 'success'})

                router.push(`/job/${newJobData.id_job}`)
              }
            } catch(error: any){
              setError(error.message)
              setModal({ message: errorMessage, type: 'error'})
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

    if (userRole !== "company")  {
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
          <section className={styles.form_section}>
            <form className={styles.new_job_form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form_rows}>
                <Input text="Título" uppercase forName="title" type="text" register={register} name="title" maxLength={60} placeholder="Ex: Desenvolvedor Java Pleno" />  
                
                <Select forName="job_category_id" text="Categoria" uppercase register={register} name="job_category_id" options={categoriesList} />

                <Select forName="modality" text="Modalidade" uppercase register={register} name="modality" options={modalitiesList} />

                <Select forName="contract" text="Contrato" uppercase register={register} name="contract" options={contractsList} />

                <Input text="Salário" uppercase forName="wage" type="text" register={register} name="wage" maxLength={60} placeholder="Inserir números." />  
              </div>

              <div className={styles.description_row}>
                <Input text="Descrição" uppercase forName="description" type="text" register={register} name="description" maxLength={500} placeholder="Descreva a sua vaga." />  
              </div>

              <div className={styles.button_div}>
                <Button text="REGISTRAR" type="submit" />
              </div>
            </form>
          </section>
        </main>
      );
}  