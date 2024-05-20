'use client'

import JobCard from '@/presentation/components/job-card';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import LoadingScreen from '@/presentation/components/loadingScreen';
import { useHome } from '@/providers/home-data-provider';
import { IGetCategory } from '@/api/endpoints/job-categories/getCategory.endpoint';
import getCategories from '@/api/endpoints/job-categories/getCategories.endpoint';
import { useRouter } from 'next/router';

export default function NewJobScreen() {
    const [categories, setCategories] = useState<IGetCategory[]>([])
    const [isCategoriesLoading, setCategoriesLoading] = useState<boolean>(true);
    const [companyId, setCompanyId] = useState<number>()
    const [isCompanyIdLoading, setCompanyIdLoading] = useState<boolean>(true);

    const { homeData, isHomeDataLoading } = useHome();

    const router = useRouter()
  
    useEffect(() => {
      (async () => {
        const data = await getCategories()

        const company_id = homeData?.id
        
        if (!company_id) {
            setCompanyIdLoading(false)
            router.push('/')
        }
  
        if ("status" in data) {
          console.error(data)
        } else {
          setCompanyId(company_id)
          setCategories(data)

          setCompanyIdLoading(false)
          setCategoriesLoading(false)
        }
      })()
    }, [])

    if (isCategoriesLoading === true || isCompanyIdLoading === true) {
      return  (
        <>
          <LoadingScreen gradient='green' />
        </>
      )
    }


}  