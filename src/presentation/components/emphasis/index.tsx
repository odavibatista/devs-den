import "./styles.module.scss";
import styles from "./styles.module.scss";

interface EmphasisProps {
  text: string;
  color: "light_blue" | "aqua_green" | "teal" | "dark_teal";
}

const Emphasis = ({ text, color }: EmphasisProps): JSX.Element => {
  return <em className={styles[color] + ` ${styles.emphasis}`}>{text}</em>;
};

export default Emphasis;
