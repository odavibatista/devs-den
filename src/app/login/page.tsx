import Button from "@/presentation/components/button";
import styles from './styles.module.scss'

export default function LoginScreen() {
  return (
    <div className={styles.mainLogin}>
        <div className={styles.leftLogin}>
            <img src="rapazzz.svg" alt="jeff-bezos" />
            <h1><br/>JEFFREY BEZOS</h1>
            <text>
              “Graças ao Dev’s Den, minha equipe conseguiu achar os desenvolvedores certos em tempo recorde! As ferramentas do site ajudam que o candidato certo venha para a vaga certa. Não tem erro!”
            </text>
        </div>
        <div className={styles.rightLogin}>
            <div className={styles.cardLogin}>
                <div className={styles.textField}>
                    <h1>LOGIN</h1>
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" name="Usuario" placeholder="Usuario" />
                </div>
                <div className={styles.textField}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha" />
                </div>
                <Button text="Login"  />
            </div>
        </div>
    </div>
  );
}
