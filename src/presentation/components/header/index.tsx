import styles from './styles.module.scss'
import React from "react";

interface User {
    name: string
}

function LoginTab({name}: User) {
    return name?
        <div className={styles.account}>
            <div>
                <a href="/candidaturas">CANDIDATURAS</a>
            </div>
            <div className={styles.user}>
                <img src="user.svg" alt=""></img>
                <a href="/conta">{name}</a>
            </div>
        </div>
        :
        <div className={styles.login}>
            <div>
                <a href="/login">LOGIN</a>
            </div>
            <div>
                <a className={styles.register} href="/registrar">REGISTRE-SE</a>
            </div>
        </div>

}

export default function Header2() {
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="logo.png" alt=""/>
            </div>
            <div className={styles.items}>
                <div className={styles.about}>
                    <div>
                        <a href="/sobre">SOBRE</a>
                    </div>
                    <div>
                        <a href="/vagas">VAGAS</a>
                    </div>
                </div>
                <LoginTab name=""/>
            </div>
        </div>
    )
}