import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
    type: 'submit' | 'password' | 'date' | 'email'
    name: string
}

const InputComponent = ({ placeholder, type }: InputProps): JSX.Element => {

    return(
        <input className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default InputComponent