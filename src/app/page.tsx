'use client'
import Button from "@/presentation/components/button";
import CategoryBadge from "@/presentation/components/category-badge";
import styles from './styles.module.scss'
import { useEffect, useState } from "react";
import { IGetCategory } from "@/api/endpoints/job-categories/getCategory.endpoint";
import getCategories from "@/api/endpoints/job-categories/getCategories.endpoint";
import Emphasis from "@/presentation/components/emphasis";

export default function Home() {
  const [categories, setCategories] = useState<IGetCategory[]>([])
  const [isCategoriesLoading, setCategoriesLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await getCategories()

      if ("status" in data) {
        console.error(data)
      } else {
        setCategories(data)
        setCategoriesLoading(false)
      }
    })()
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.hero_h1}>Sua carreira de TI começa aqui.</h1>
        <h4 className={styles.hero_h4}>Empresas de todo o país buscam profissionais pelo DEV'S DEN.</h4>
        <div className={styles.button_div}>
          <Button text="FAÇA PARTE" type="button" />
        </div>
      </section>
      <section>
      </section>
      <section className={styles.categories_section}>
        <h1 className={styles.categories_h1}><Emphasis text="ATUE" color="light_blue" /> NAS ÁREAS DE TI!</h1>
        <div className={styles.categories}>
            {
              categories && categories?.map((category) => {
                return (
                  <CategoryBadge imageUrl={category.image_url} name={category.name} key={category.id_category} />
                )
              })
            }
        </div>
      </section>
    </main>
  );
}
