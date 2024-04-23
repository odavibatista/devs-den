import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"
import Label from "@/presentation/components/label"
import userLogin from "@/api/routes/user/userLogin";

export default async function LoginScreen() {

  const response = await userLogin({email: "davie@email.com", password: "abcd1234"})

  console.log(await response)

  return (
    <section className={styles.mainLogin}>
        <div className={styles.leftLogin}>
            <img src="/login/jeff-bezos.jpg" alt="jeff-bezos" className={styles.avatar} />
            <h1 className={styles.ceoName}>JEFFREY BEZOS</h1>
            <text className={styles.ceoTestimony}>
              “Graças ao Dev’s Den, minha equipe conseguiu achar os desenvolvedores certos em tempo recorde! As ferramentas do site ajudam que o candidato certo venha para a vaga certa. Não tem erro!”
            </text>
        </div>
        <div className={styles.rightLogin}>
                <div className={styles.textField}>
                    <Label forName="email" text="E-mail" uppercase/>
                    <Input type="email" placeholder="Digite seu e-mail." name="email" />
                </div>
                <div className={styles.textField}>
                    <Label forName="password" text="Senha" uppercase/>
                    <Input type="password" placeholder="Digite sua senha." name="password" />
                </div>
                <Button text="ENTRAR"  />
        </div>
    </section>
  );
}
