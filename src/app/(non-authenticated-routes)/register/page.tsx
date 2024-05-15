'use client'

import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"
import Label from "@/presentation/components/label"

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useHome } from "@/providers/home-data-provider";
import refreshPage from "@/server/utils/refresh.function";

const loginSchema = z.object({
  email: z.string().min(14, { message: 'Campo obrigatório.' }),
  password: z.string().min(8, { message: 'Campo obrigatório.' })
})

type RegisterSchemaInterface = z.infer<typeof loginSchema>

export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState('')
  const [loginData, setLoginData] = useState<RegisterSchemaInterface>()

  const { homeData, isHomeDataLoading } = useHome();

  /* Configurações do Zod */
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterSchemaInterface>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
  })

  /* Chamamos o router para utilizá-lo para os redirects necessários */
  const router = useRouter()

  /* Vai ser chamado quando o formulário receber submit */
  async function onSubmit (data: RegisterSchemaInterface) {
    setLoginData(data)
  }

  /* Vai ser chamado quando houver algum erro de formato */
  function setError(message: string) {
    setErrorMessage(message)
  }




  return (
    <main>
        
    </main>
  );
}
