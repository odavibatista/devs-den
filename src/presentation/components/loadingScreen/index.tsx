import styles from "./styles.module.scss";

interface LoadingScreenProps {
  gradient: "green" | "blue" | "dark";
}

const LoadingScreen = ({ gradient }: LoadingScreenProps): JSX.Element => {
  return (
    <section id={styles.loading} className={styles[gradient]}>
      <div className="spinner-border" role="status" id={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </section>
  );
};

export default LoadingScreen;
