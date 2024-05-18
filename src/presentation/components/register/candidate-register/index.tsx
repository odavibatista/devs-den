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

const registerCandidateSchema = z.object({
  name: z.string().min(8, { message: 'Campo obrigatório.' }),
  email: z.string().min(14, { message: 'Campo obrigatório.' }),
  birth_date: z.string().min(20, { message: 'Campo obrigatório.' }),
  password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  confirm_password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  cep: z.string().min(8).max(8, { message: 'Campo obrigatório.' }),
  street: z.string().min(1).max(100, { message: 'Campo obrigatório.' }),
  uf: z.string().min(2).max(2, { message: 'Campo obrigatório.' }),
  city: z.string().min(3).max(50, { message: 'Campo obrigatório.' }),
  number: z.string().min(1).max(10, { message: 'Campo obrigatório.' }),
  complement: z.string().min(0).max(50, { message: 'Campo obrigatório.' }),
})

type RegisterCandidateSchemaInterface = z.infer<typeof registerCandidateSchema>

export default function CandidateRegister({listOfUFs}: {listOfUFs: {name: string, value: number}[]}) {
    const [errorMessage, setErrorMessage] = useState('')
    const [registerCandidateData, setRegisterData] = useState<RegisterCandidateSchemaInterface>()

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
                // Adapt the code here for registering the candidate
              } catch(error: any){
                setError("Deu ruim")
              }
            }
            setRegisterData(undefined)
        })()
      })
  return (
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_rows}>
          <Input text="Nome Completo" uppercase forName="name" type="text" register={register} name="name" maxLength={60} placeholder="Ex: João da Silva" />  

          <Input forName="email" text="E-mail" uppercase type="email"register={register} name="email" maxLength={50} placeholder="Ex: joão@dev.com" />

          <Input forName="birth" text="Data de Nasc." uppercase type="date" register={register} name="birth" maxLength={16} placeholder="Ex: 01/01/2000" />
        </div>

        <div className={styles.form_rows}>
          <Input forName="cep" text="CEP" uppercase type="text" register={register} name="cep" maxLength={8} placeholder="Ex: 00000-000" />

          <Input forName="street" text="Rua" uppercase type="text" register={register} name="street" maxLength={60} placeholder="Rua A" />

          <Select forName="uf" text="Estado" uppercase register={register} name="uf" options={listOfUFs} />

          <Input forName="city" text="Cidade" uppercase type="text" register={register} name="city" maxLength={50} placeholder="Ex: São Paulo" />
        </div>

        <div className={styles.form_rows}>
          <Input forName="number" text="Número" uppercase type="text" register={register} name="number" maxLength={8} placeholder="Ex: 100" />

          <Input forName="complement" text="Complemento" uppercase type="text" register={register} name="complement" maxLength={60} placeholder="Ex: Casa" />

          <Input forName="password" text="Senha" uppercase type="password" register={register} name="password" maxLength={2} placeholder="" />

          <Input forName="confirm_password" text="Confirmar Senha" uppercase type="password" register={register} name="confirm_password" maxLength={100} placeholder="" />
        </div>

        <div className={styles.button_div}>
          <Button size="large" text="REGISTRAR" type="submit" />
        </div>
      </form>
  );
}
