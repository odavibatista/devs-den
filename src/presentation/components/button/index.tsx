import styles from './styles.module.scss'

interface ButtonProps {
    text: string
    type?: 'submit' | 'button'
    size: 'small' | 'medium' | 'large'
    className?: string
    onClick?: () => void
}

const Button = ({ text, type, size, onClick }: ButtonProps): JSX.Element => {

    return(
        <button className={styles.button + ' ' + styles[size]}
        type={type}
        onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button