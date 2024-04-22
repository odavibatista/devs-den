import styles from './styles.module.scss'

interface LabelProps {
    text: string
    forName: string
    uppercase: boolean
}

const Label = ({ text, forName, uppercase }: LabelProps): JSX.Element => {

    return(
        <label htmlFor={forName} className={`${styles.label} ${uppercase === true ? styles.uppercase : ""}`}>
            {text}
        </label>
    )
}

export default Label