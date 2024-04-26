import styles from './styles.module.scss'

interface ButtonProps {
    text: string
    type?: 'submit' | 'button'
    onClick?: () => void
}

const Button = ({ text, type, onClick }: ButtonProps): JSX.Element => {

    return(
        <button className={styles.button}
        type={type}
        onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button