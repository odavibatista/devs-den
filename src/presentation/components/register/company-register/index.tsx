'use client'

import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import refreshPage from "@/server/utils/refresh.function";

const registerCompanySchema = z.object({
  company_name: z.string().min(5).max(50, { message: 'Campo obrigatório.' }),
  email: z.string().min(14, { message: 'Campo obrigatório.' }),
  cnpj: z.string().min(16).max(16, { message: 'Campo obrigatório.' }),
  password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  confirm_password: z.string().min(8).max(100, { message: 'Campo obrigatório.' }),
  cep: z.string().min(8).max(8, { message: 'Campo obrigatório.' }),
  street: z.string().min(1).max(100, { message: 'Campo obrigatório.' }),
  uf: z.string().min(2).max(2, { message: 'Campo obrigatório.' }),
  city: z.string().min(3).max(50, { message: 'Campo obrigatório.' }),
  number: z.string().min(1).max(10, { message: 'Campo obrigatório.' }),
  complement: z.string().min(0).max(50, { message: 'Campo obrigatório.' }),
})

type RegisterCompanySchemaInterface = z.infer<typeof registerCompanySchema>

export default function CompanyRegister() {
    const [errorMessage, setErrorMessage] = useState('')
    const [registerCandidateData, setRegisterData] = useState<RegisterCompanySchemaInterface>()

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterCompanySchemaInterface>({
        resolver: zodResolver(registerCompanySchema),
        mode: 'all',
      })
      

    async function onSubmit (data: RegisterCompanySchemaInterface) {
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
      <form className={styles.register_company_form}>
        <div className={styles.form_rows}>
          <Input text="Razão Social" uppercase forName="company_name" type="text" register={register} name="company_name" maxLength={60} placeholder="Ex: Acme S/A do Brasil" />  

          <Input forName="email" text="EMAIL CORPORATIVO" uppercase type="email"register={register} name="email" maxLength={50} placeholder="Ex: contato@acme.com.br" />

          <Input forName="cnpj" text="CNPJ" uppercase type="text" register={register} name="cnpj" maxLength={16} placeholder="Ex: 00.000.000/0001-00" />
        </div>

        <div className={styles.form_rows}>
          <Input forName="cep" text="CEP" uppercase type="text" register={register} name="cep" maxLength={8} placeholder="Ex: 00000-000" />

          <Input forName="street" text="Rua" uppercase type="text" register={register} name="street" maxLength={60} placeholder="Rua A" />

          <Input forName="uf" text="Estado" uppercase type="select" register={register} name="uf" maxLength={2} placeholder="Selecione..." options={["Teste 1", "Teste 2"]} />

          <Input forName="city" text="Cidade" uppercase type="text" register={register} name="city" maxLength={50} placeholder="Ex: São Paulo" />
        </div>

        <div className={styles.form_rows}>
          <Input forName="number" text="Número" uppercase type="text" register={register} name="number" maxLength={8} placeholder="Ex: 100" />

          <Input forName="complement" text="Complemento" uppercase type="text" register={register} name="complement" maxLength={60} placeholder="Ex: Casa" />

          <Input forName="password" text="Senha" uppercase type="password" register={register} name="password" maxLength={2} placeholder="" />

          <Input forName="confirm_password" text="Confirmar Senha" uppercase type="password" register={register} name="confirm_password" maxLength={100} placeholder="" />
        </div>
      </form>
  );
}