import styles from './styles.module.scss'
import XLink from '../xlink'

export default function Footer() {

    return(
        <div className={styles.footer}>
            <XLink href="/" className={styles.nav_link}>
                <img src="/header/logo.png" alt="" className={styles.footer_image} />
            </XLink>
            <div className={styles.items}>
                <XLink href="/about" className={styles.nav_link}>
                    <p className={styles.nav_link}>SOBRE</p>
                </XLink>
                <XLink href="/jobs" className={styles.nav_link}>
                    <p className={styles.nav_link}>VAGAS</p>
                </XLink>
                <XLink href="/privacy-politics" className={styles.nav_link}>
                    <p className={styles.nav_link}>PRIVACIDADE</p>
                </XLink>
                <XLink href="/use-terms" className={styles.nav_link}>
                    <p className={styles.nav_link}>TERMOS DE USO</p>
                </XLink>
            </div>
        </div>
    )
}