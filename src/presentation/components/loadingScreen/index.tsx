import styles from './styles.module.scss'

const LoadingScreen = (): JSX.Element => {

    return(
        <section  id={styles.loading}>
            <div className="spinner-border" role="status" id={styles.spinner}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </section>
       
    )
}

export default LoadingScreen