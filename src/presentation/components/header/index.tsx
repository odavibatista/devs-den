import styles from './styles.module.scss'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Button from '../button';

export default function Header() {
    return (
        <nav className={styles.navbar + " navbar navbar-expand-lg container-fluid sticky-top navigation"}>
            <a className="navbar-brand">
                <img src="./logo.png" alt="" className="navImage"/>
            </a>
            <button id="nav-button" className="position-relative navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className={" collapse navbar-collapse justify-content-end"} id="navbarSupportedContent">
                <ul className={styles.right_nav + " navbar-nav"}>
                    <li className="nav-item">
                    <Link href="/jobs">
                        <p className={styles.nav_link}>Sobre</p>
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/jobs">
                            <p className={styles.nav_link}>Vagas</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login">
                            <Button text="LOGIN" size='small'/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/register">
                            <Button text="REGISTRE-SE" size='medium' />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}