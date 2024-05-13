'use client'
import Button from "@/presentation/components/button";
import CategoryBadge from "@/presentation/components/category-badge";
import styles from './styles.module.scss'
import { useEffect, useState } from "react";
import { IGetCategory } from "@/api/routes/job-categories/getCategory";
import getCategories from "@/api/routes/job-categories/getCategories";

export default function Home() {
  const [categories, setCategories] = useState<IGetCategory[]>([])
  const [isCategoriesLoading, setCategoriesLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await getCategories()

      if ("statusCode" in data) {
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
        <Button text="Faça parte" size="large" type="button" />
      </section>
      <section>
      </section>
      <section className={styles.categories_section}>
        <h1>ATUE NAS ÁREAS DE TI!</h1>
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
