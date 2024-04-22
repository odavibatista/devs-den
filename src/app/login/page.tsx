import Button from "@/presentation/components/button";
import styles from './styles.module.scss'
import Input from "@/presentation/components/input"

export default function LoginScreen() {
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
                    <label htmlFor="email">Usuario</label>
                    <Input type="email" placeholder="Digite seu e-mail." name="email" />
                </div>
                <div className={styles.textField}>
                    <label htmlFor="password">Senha</label>
                    <Input type="password" placeholder="Digite sua senha." name="password" />
                </div>
                <Button text="ENTRAR"  />
        </div>
    </section>
  );
}
