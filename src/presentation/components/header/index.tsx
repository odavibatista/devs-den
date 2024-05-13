import styles from './styles.module.scss'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Button from '../button';

export default function Header() {
    return (
        <nav className={"navbar navbar-expand-lg container-fluid fixed-top navigation " + styles.header} id={styles.header}>
            <Link className="navbar-brand" href={'/'}>
                <img src="/header/logo.png" alt="" className={styles.header_image  + " navImage"} />
            </Link>
            <button id="nav-button" className="position-relative navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className={" collapse navbar-collapse justify-content-end"} id="navbarSupportedContent">
                <ul className={styles.right_nav + " navbar-nav"}>
                    <li className={styles.nav_item + " nav-item"}>
                    <Link href="/about" className={styles.nav_link}>
                        <p className={styles.nav_link}>Sobre</p>
                    </Link>
                    </li>
                    <li className={styles.nav_item + " nav-item"}>
                        <Link href="/jobs" className={styles.nav_link}>
                            <p className={styles.nav_link}>Vagas</p>
                        </Link>
                    </li>
                    <li className={styles.nav_item + " nav-item"}>
                        <Link href="/login" className={styles.nav_link}>
                            <Button text="LOGIN" size='small'/>
                        </Link>
                    </li>
                    <li className={styles.nav_item + " nav-item"}>
                        <Link href="/register" className={styles.nav_link}>
                            <Button text="REGISTRE-SE" size='medium' />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}