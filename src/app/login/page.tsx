'use client'

import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"
import Label from "@/presentation/components/label"

import userLogin from "@/api/routes/user/userLogin";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const loginSchema = z.object({
  email: z.string().email().min(15, { message: 'Campo obrigatório.' }),
  password: z.string().min(8, { message: 'Campo obrigatório.' })
})

type LoginSchemaInterface = z.infer<typeof loginSchema>

export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState('')
  const [data, setData] = useState<LoginSchemaInterface>({email: 'davide@email.com', password: '@Davi1222234abcd1234'})

  /* Configurações do Zod */
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginSchemaInterface>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
  })

  /* Chamamos o router para utilizá-lo para os redirects necessários */
  const router = useRouter()

  /* Vai ser chamado quando o formulário receber submit */
  async function onSubmit(data: LoginSchemaInterface) {
    setData(data)
  }

  /* Vai ser chamado quando houver algum erro de formato */
  function setError(message: string) {
    setErrorMessage(message)
  }

  useEffect(() => {
    (async () => {
        if (data !== undefined) {

            const { email, password } = data

            /* Chamamos o service do Axios para login */
            const response = await userLogin({
              email: email,
              password: password
            })

            console.log(response)

            /* Validamos se recebemos dados na resposta */
            if (response) {
                if (response?.ok === 201) {
                  /* Por enquanto não temos as rotas autenticadas, vamos somente deixar um alert */
                  alert('Login efetuado com sucesso!')

                  console.log(response?.data)
                  /* A ideia é fazermos um push para o perfil ou para a home autenticada */
                  // router.push('/home')
                } else {
                    setError(response?.data?.message)
                }
            }
            setData({ email: 'davide@email.com', password: '@Davi1222234abcd1234' })
        }
      })()
  }, [])

  return (
    <section className={styles.mainLogin}>
        <div className={styles.leftLogin}>
            <img src="/login/jeff-bezos.jpg" alt="jeff-bezos" className={styles.avatar} />
            <h1 className={styles.ceoName}>JEFFREY BEZOS</h1>
            <p className={styles.ceoTestimony}>
              “Graças ao Dev’s Den, minha equipe conseguiu achar os desenvolvedores certos em tempo recorde! As ferramentas do site ajudam que o candidato certo venha para a vaga certa. Não tem erro!”
            </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.rightLogin}>
                <div className={styles.textField}>
                    <Label forName="email" text="E-mail" uppercase/>
                    <Input type="email" placeholder="Digite seu e-mail." name="email" maxLength={50} register={register} />
                </div>
                <div className={styles.textField}>
                    <Label forName="password" text="Senha" uppercase/>
                    <Input type="password" placeholder="Digite sua senha." name="password" maxLength={40} register={register} />
                </div>
                <Button text="ENTRAR" type="submit" />
        </form>
    </section>
  );
}
