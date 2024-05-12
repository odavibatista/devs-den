import styles from './styles.module.scss'

export default function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src="logo.png" alt=""/>
            </div>
            <div className={styles.items}>
                <div>
                    <a href="/sobre">SOBRE</a>
                    <a href="/vagas">VAGAS</a>
                </div>
                <div className={styles.item1}>
                    <a href="/privacy">PRIVACIDADE</a>
                    <a href="/terms">TERMOS DE USO</a>
                </div>
            </div>
        </div>
    )
}