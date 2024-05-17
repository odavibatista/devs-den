'use client'

import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"
import Label from "@/presentation/components/label"

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
        <div>
          <span>
            <Label text="Razão Social" uppercase forName="company_name" />
            <Input type="text" register={register} name="name" maxLength={60} placeholder="Ex: Acme S/A do Brasil" />  
          </span>
          
          <span>
            <Label text="Email Corporativo" uppercase forName="email" />
            <Input type="email"register={register} name="email" maxLength={50} placeholder="Ex: contato@acme.com.br" />
          </span>
          
          <span>
            <Label text="CNPJ" uppercase forName="cnpj" />
            <Input type="text" register={register} name="cnpj" maxLength={16} placeholder="Ex: 00.000.000/0001-00" />
          </span>
        </div>
        <div>
          <span>
          
          </span>
          
          <span>
            
          </span>
          
          <span>
            
          </span>
          
          <span>
            
          </span>
        </div>
        <div>

        </div>
      </form>
  );
}
