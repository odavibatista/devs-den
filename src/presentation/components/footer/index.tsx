import Link from 'next/link'
import styles from './styles.module.scss'

export default function Footer() {

    return(
        <div className={styles.footer}>
            <img src="/header/logo.png" alt="" className={styles.footer_image} />
            <div className={styles.items}>
                <Link href="/about" className={styles.nav_link}>
                    <p className={styles.nav_link}>SOBRE</p>
                </Link>
                <Link href="/jobs" className={styles.nav_link}>
                    <p className={styles.nav_link}>VAGAS</p>
                </Link>
                <Link href="/privacy-politics" className={styles.nav_link}>
                    <p className={styles.nav_link}>PRIVACIDADE</p>
                </Link>
                <Link href="/use-terms" className={styles.nav_link}>
                    <p className={styles.nav_link}>TERMOS DE USO</p>
                </Link>
            </div>
        </div>
    )
}