import JobCard from '@/presentation/components/job-card';
import styles from './styles.module.scss'

export default function JobsScreen() {
  
    return (
      <main className={styles.section}>
        <div>
            <h1>VAGAS</h1>
        </div>
        <section>
            <JobCard title="Desenvolvedor" wage={5000.00} modality="remote"/>
        </section>
      </main>
    );
  }
  