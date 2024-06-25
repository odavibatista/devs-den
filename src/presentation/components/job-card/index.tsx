// import { IGetJob } from '@/api/routes/jobs/getSingleJob'
import styles from "./styles.module.scss";

interface IProvisoryJobProps {
  title: string;
  wage: number;
  modality: string;
}

const JobCard = ({
  title,
  wage,
  modality,
}: IProvisoryJobProps): JSX.Element => {
  if (modality === "remote") modality = "Remoto";
  if (modality === "hybrid") modality = "Híbrido";
  if (modality === "presential") modality = "Presencial";

  return (
    <div className={styles.job_card}>
      <h4 className={styles.h4}>{title}</h4>
      <h6 className={styles.h6}>{modality}</h6>
      <p className={styles.p}>
        R${" "}
        <em className={styles.em}>
          {(Math.round(wage * 100) / 100).toFixed(2)}
        </em>
      </p>
    </div>
  );
};

export default JobCard;
