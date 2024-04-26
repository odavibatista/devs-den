import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
    type: 'submit' | 'password' | 'date' | 'email'
    name: string
    maxLength?: number
    register?: any
}

const InputComponent = ({ placeholder, type, name, maxLength, register }: InputProps): JSX.Element => {

    return(
        <input 
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            maxLength={maxLength}
            {...(register && register(name))}
        />
    )
}

export default InputComponent