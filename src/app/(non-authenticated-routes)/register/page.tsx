'use client'

import styles from './styles.module.scss'
import { useEffect, useState } from "react";
import CandidateRegister from "@/presentation/components/register/candidate-register";
import CompanyRegister from "@/presentation/components/register/company-register";

export default function LoginScreen() {
  const [errorMessage, setErrorMessage] = useState('')
  const [registerType, setRegisterType] = useState<'candidate' | 'company'>('candidate')

  const registerTypeHandle = (type: 'candidate' | 'company') => {
    setRegisterType(type)
  }

  return (
    <main className={styles.main}>
      <section className={styles.form_section}>
        <h1 className={styles.form_h1}>DEV'S DEN - CADASTRO</h1>
        <h1 className={styles.form_h1}>Você é...</h1>
        <div className={styles.controllers}>
          <span id={styles.candidate} className={`${styles.controller}  ${registerType === 'candidate' ? styles.active : styles.unactive}`} onClick={() => registerTypeHandle('candidate')} >
            CANDIDATO
          </span>
          <span id={styles.company} className={`${styles.controller}  ${registerType === 'company' ? styles.active : styles.unactive}`} onClick={() => registerTypeHandle('company')}>
            EMPRESA
          </span>
        </div>
      {
          registerType === 'candidate' ? 
          <CandidateRegister />
          :
          <CompanyRegister />
        }
      </section>
    </main>
  );
}
