import styles from './styles.module.scss'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
    name: string
}

function LoginTab({name}: User) {
    const userimg = require('./user.png')

    return name?
        <div className={'col-md-6 d-flex justify-content-evenly justify-content-md-end pe-3 pe-md-5'}>
            <div className={'col-md-9 d-flex align-items-center justify-content-end pe-md-3 gap-4 gap-sm-5 gap-md-4'}>
                <div className={'col-sm-2 d-flex justify-content-center'}>
                    <a href="/sobre">SOBRE</a>
                </div>
                <div className={'col-md-2 d-flex justify-content-center'}>
                    <a href="/vagas">VAGAS</a>
                </div>
                <div className={'w-auto col-md-2 d-flex justify-content-center'}>
                    <a href="/candidaturas">CANDIDATURAS</a>
                </div>
                <a className={'col-md-3 d-flex justify-content-center align-items-center gap-2 text-uppercase me-md-2'} href="/conta">
                    <img className={`${styles.user} img-fluid`} src={userimg} alt=""></img>
                    {name}
                </a>
            </div>
        </div>
        :
        <div className={'col col-md-6 d-flex align-items-center justify-content-evenly justify-content-md-end pe-md-5 gap-md-5'}>
            <div className={'col-md-2 d-flex justify-content-center'}>
                <a href="/sobre">SOBRE</a>
            </div>
            <div className={'col-md-2 d-flex justify-content-center'}>
                <a href="/vagas">VAGAS</a>
            </div>
            <div className={'col-md-2 me-2 d-flex justify-content-center'}>
                <a className={styles.login} href="/login">LOGIN</a>
            </div>
            <div className={'col-md-2 d-flex justify-content-center me-md-5'}>
                <a className={styles.register} href="/registrar">REGISTRE‑SE</a>
            </div>
        </div>

}

export default function Header() {
    const logo = require('./logo.png')

    return (
        <div className={`${styles.header} row align-items-center position-fixed text-left`}>
            <div className={`col-md-6 d-flex justify-content-center justify-content-md-evenly ps-md-4`}>
                <a href="/"><img role={'button'} className={`${styles.logo} col-md-4 me-md-3 img-fluid ms-md-5`} src={logo} alt=""/></a>
                <div className={'col-0 col-md-2'} />
            </div>
            <LoginTab name="Kaa"/>
        </div>
    )
}