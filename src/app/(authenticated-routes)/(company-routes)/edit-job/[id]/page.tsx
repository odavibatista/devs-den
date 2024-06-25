"use client";

import styles from "./styles.module.scss";
import getCategories from "@/api/endpoints/job-categories/getCategories.endpoint";
import { IGetCategory } from "@/api/endpoints/job-categories/getCategory.endpoint";
import LoadingScreen from "@/presentation/components/loadingScreen";
import Modal from "@/presentation/components/modal";
import { useModal } from "@/presentation/hooks/useModal";
import { useHome } from "@/providers/home-data-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const editJobSchema = z.object({
    title: z.string().min(14, { message: "Campo obrigatório." }),
    description: z.string().min(10, { message: "Campo obrigatório." }),
    job_category_id: z.string().min(1, { message: "Campo obrigatório." }),
    wage: z.string().min(4, { message: "Campo obrigatório." }),
    modality: z.string().min(4, { message: "Campo obrigatório." }),
    contract: z.string().min(3, { message: "Campo obrigatório." }),
  });

type EditJobSchemaInterface = z.infer<typeof editJobSchema>;

export default function EditJobScreen() {
    const [categories, setCategories] = useState<IGetCategory[]>([]);
    const [isCategoriesLoading, setCategoriesLoading] = useState<boolean>(true);
    const [companyId, setCompanyId] = useState<number>();
    const [isCompanyIdLoading, setCompanyIdLoading] = useState<boolean>(true);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [editJobData, setEditJobData] =
    useState<EditJobSchemaInterface>();

    const { modal, setModal, openCloseModal } = useModal();
  
    const categoriesList = categories.map((category) => {
      return {
        name: category.name,
        value: category.id_category,
      };
    });
  
    const contractsList = [
      {
        name: "CLT",
        value: "clt",
      },
  
      {
        name: "PJ",
        value: "pj",
      },
  
      {
        name: "Estágio",
        value: "intern",
      },
    ];
  
    const modalitiesList = [
      {
        name: "Presencial",
        value: "presential",
      },
  
      {
        name: "Híbrido",
        value: "hybrid",
      },
  
      {
        name: "Remoto",
        value: "remote",
      },
    ];
  
    const { homeData, isHomeDataLoading } = useHome();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm<EditJobSchemaInterface>({
      resolver: zodResolver(editJobSchema),
      mode: "all",
    });
  
    async function onSubmit(data: EditJobSchemaInterface) {
      setEditJobData(data);
    }
  
    function setError(message: string) {
      setErrorMessage(message);
    }
  
    const router = useRouter();
  
    useEffect(() => {
      (async () => {
        if (homeData && !isHomeDataLoading) {
          setCompanyId(homeData?.id);
          setUserRole(homeData?.role);
        }
      })();
    });
  
    useEffect(() => {
      (async () => {
        const data = await getCategories();
  
        if ("status" in data) {
          setErrorMessage(data.message);
  
          setModal({ message: errorMessage, type: "error" });
          return;
        } else {
          setCategories(data);
  
          setCompanyIdLoading(false);
          setCategoriesLoading(false);
        }
      })();
    }, []);
  
    useEffect(() => {
      (async () => {

      })();
    });
  
    if (isCategoriesLoading === true || isCompanyIdLoading === true) {
      return (
        <>
          <LoadingScreen gradient="green" />
        </>
      );
    }
  
    if (!categories || categories.length === 0) {
      return (
        <>
          <main className={styles.error}>
            <h1>Ocorreu um erro. Tente novamente mais tarde.</h1>
          </main>
        </>
      );
    }
  
    if (userRole !== "company") {
      return (
        <>
          <main className={styles.error}>
            <h1>Você não tem permissão para acessar este recurso.</h1>
          </main>
        </>
      );
    }
  
    return (
      <main className={styles.main}>
        <section className={styles.form_section}>
          <form className={styles.new_job_form} onSubmit={handleSubmit(onSubmit)}>

          </form>
          {modal?.message !== "" && (
            <Modal modal={modal} openCloseModal={openCloseModal} />
          )}
        </section>
      </main>
    );
  }
  