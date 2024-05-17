'use client'

import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"

import userLogin from "@/api/endpoints/user/userLogin.endpoint";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import refreshPage from "@/server/utils/refresh.function";

const loginSchema = z.object({
  email: z.string().min(14, { message: 'Campo obrigatório.' }),
  password: z.string().min(8, { message: 'Campo obrigatório.' })
})

type LoginSchemaInterface = z.infer<typeof loginSchema>

export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState('')
  const [loginData, setLoginData] = useState<LoginSchemaInterface>()

  /* Configurações do Zod */
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<LoginSchemaInterface>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
  })

  /* Chamamos o router para utilizá-lo para os redirects necessários */
  const router = useRouter()

  /* Vai ser chamado quando o formulário receber submit */
  async function onSubmit (data: LoginSchemaInterface) {
    setLoginData(data)
  }

  /* Vai ser chamado quando houver algum erro de formato */
  function setError(message: string) {
    setErrorMessage(message)
  }


  useEffect(() => {
    (async () => {
        if (loginData !== undefined) {
          try {
            const login = await userLogin({
              email: loginData.email,
              inserted_password: loginData.password
            })

            if("status" in login){
              setError(login.message)
              alert(errorMessage)
              return
            }

            sessionStorage.setItem("session", login.token)
            router.push("/jobs")
            
            await refreshPage()
          } catch(error: any){
            setError("Deu ruim")
          }
        }
        setLoginData(undefined)
    })()
  })

  return (
    <section className={styles.mainLogin + ' .green_gradient'}>
      <div className={styles.leftLogin}>
        <img src="/login/jeff-bezos.jpg" alt="jeff-bezos" className={styles.avatar} />
        <h1 className={styles.ceoName}>JEFFREY BEZOS</h1>
        <p className={styles.ceoTestimony}>
          “Graças ao Dev’s Den, minha equipe conseguiu achar os desenvolvedores certos em tempo recorde! As ferramentas do site ajudam que o candidato certo venha para a vaga certa. Não tem erro!”
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.rightLogin}>
        <div className={styles.textField}>
          <Input forName="email" text="E-mail" uppercase type="email" placeholder="Digite seu e-mail." name="email" maxLength={50} register={register} />
        </div>
        <div className={styles.textField}>
          <Input forName="password" text="Senha" uppercase type="password" placeholder="Digite sua senha." name="password" maxLength={40} register={register} />
        </div>
        <Button size="medium" text="ENTRAR" type="submit" />
      </form>
    </section>
  );
}
