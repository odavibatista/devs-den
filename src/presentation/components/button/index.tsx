import styles from './styles.module.scss'

interface ButtonProps {
    text: string
    type?: 'submit'
}

const Button = ({ text, type }: ButtonProps): JSX.Element => {

    return(
        <button className={styles.button}
        type={type}>
            {text}
        </button>
    )
}

export default Button