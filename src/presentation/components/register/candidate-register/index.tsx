'use client'

import Button from "@/presentation/components/button";
import styles from '../styles.module.scss'
import Input from "@/presentation/components/input"

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import refreshPage from "@/server/utils/refresh.function";
import Select from "../../select";
import candidateRegister from "@/api/endpoints/candidates/candidateRegister.endpoint";
import { useRouter } from "next/navigation";
import { useModal } from "@/presentation/hooks/useModal";
import Modal from "../../modal";

const registerCandidateSchema = z.object({
  name: z.string().min(5).max(50, { message: 'Campo obrigatório.' }),
  email: z.string().min(14, { message: 'Campo obrigatório.' }),
  birth_date: z.string().min(9, { message: 'Campo obrigatório.' }),
  gender: z.string().min(4, { message: 'Campo obrigatório.' }),
  password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  confirm_password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  cep: z.string().min(8).max(8, { message: 'Campo obrigatório.' }),
  street: z.string().min(1).max(100, { message: 'Campo obrigatório.' }),
  uf: z.string().min(1, { message: 'Campo obrigatório.' }),
  city: z.string().min(3).max(50, { message: 'Campo obrigatório.' }),
  number: z.string().min(1).max(10, { message: 'Campo obrigatório.' }),
  complement: z.string().min(0).max(50, { message: 'Campo obrigatório.' }).optional(),
})

type RegisterCandidateSchemaInterface = z.infer<typeof registerCandidateSchema>

export default function CandidateRegister({listOfUFs}: {listOfUFs: {name: string, value: number}[]}) {
    const [errorMessage, setErrorMessage] = useState('')
    const [registerCandidateData, setRegisterData] = useState<RegisterCandidateSchemaInterface>()

    const router = useRouter()
    
    const { modal, setModal, openCloseModal } = useModal()

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterCandidateSchemaInterface>({
        resolver: zodResolver(registerCandidateSchema),
        mode: 'all',
      })

    async function onSubmit (data: RegisterCandidateSchemaInterface) {
        setRegisterData(data)
    }

    function setError(message: string) {
        setErrorMessage(message)
    }

      useEffect(() => {
        (async () => {
            if (registerCandidateData !== undefined) {
              try {
                const registerUser = await candidateRegister({
                  name: registerCandidateData.name,
                  birth_date: registerCandidateData.birth_date,
                  gender: registerCandidateData.gender as "male" | "female",
                  credentials: {
                    email: registerCandidateData.email,
                    password: registerCandidateData.password,
                    role: 'candidate'
                  },
                  address: {
                    uf: +registerCandidateData.uf,
                    city: registerCandidateData.city,
                    cep: registerCandidateData.cep,
                    street: registerCandidateData.street,
                    number: registerCandidateData.number,
                    complement: registerCandidateData?.complement
                  }
                })
                if ("status" in registerUser) {
                  setError(registerUser.message)
                  setModal({ message: errorMessage, type: 'error'})
                  setRegisterData(undefined)
                  return
                } else  {
                  setModal({ message: "Usuário cadastrado com sucesso!", type: 'success'})

                  sessionStorage.setItem("session", registerUser.token)

                  await refreshPage()
                  router.push("/jobs")
                }
              } catch(error: any){
                setError("Ocorreu um erro inesperado. Tente novamente mais tarde.")
                setModal({ message: errorMessage, type: 'error'})
              }
            }
        })()
      })
  return (
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_rows}>
          <Input text="Nome Completo" uppercase forName="name" type="text" register={register} name="name" maxLength={60} placeholder="Ex: João da Silva" />  

          <Input forName="email" text="E-mail" uppercase type="email"register={register} name="email" maxLength={50} placeholder="Ex: joão@dev.com" />

          <Input forName="birth_date" text="Data de Nasc." uppercase type="text" register={register} name="birth_date" />

          <Select forName="gender" text="Gênero" uppercase register={register} name="gender" options={[
          {
            name: "Masculino",
            value: 'male'
          }, 
          
          {
            name: "Feminino",
            value: 'female'
          }
          
          ]} />
        </div>

        <div className={styles.form_rows}>
          <Input forName="cep" text="CEP" type="text" register={register} name="cep" placeholder="00000-000" uppercase maxLength={8}  />

          <Input forName="street" text="Rua" type="text" register={register} name="street" maxLength={60} placeholder="Rua A" uppercase />

          <Select forName="uf" text="Estado" register={register} name="uf" options={listOfUFs} uppercase />

          <Input forName="city" text="Cidade" type="text" register={register} name="city" maxLength={50} placeholder="Ex: São Paulo" uppercase  />
        </div>

        <div className={styles.form_rows}>
          <Input forName="number" text="Número" uppercase type="text" register={register} name="number" maxLength={8} placeholder="Ex: 100" />

          <Input forName="complement" text="Complemento" uppercase type="text" register={register} name="complement" maxLength={60} placeholder="Ex: Casa" />

          <Input forName="password" text="Senha" uppercase type="password" register={register} name="password" maxLength={100} placeholder="" />

          <Input forName="confirm_password" text="Confirmar Senha" uppercase type="password" register={register} name="confirm_password" maxLength={100} placeholder="" />
        </div>

        <div className={styles.button_div}>
          <Button text="REGISTRAR" type="submit" />
        </div>

        {
          modal?.message !== '' && (
            <Modal modal={modal} openCloseModal={openCloseModal} />
          )
        }
      </form>
  );
}
