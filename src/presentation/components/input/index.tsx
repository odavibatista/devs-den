import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
    type: 'submit' | 'password' | 'date' | 'email' | 'text'
    name: string
    maxLength?: number
    errorMessage?: string
    register?: any
    text: string
    forName: string
    uppercase?: boolean
    options?: any[]
}

const InputComponent = ({ placeholder, type, name, maxLength, register, forName, uppercase, text, errorMessage }: InputProps): JSX.Element => {

    return(
        <span className={styles.span}>
            <label htmlFor={forName} className={`${styles.label} ${uppercase === true ? styles.uppercase : ""}`}>
            {text}
            </label>
            <input 
                className={styles.input}
                type={type}
                placeholder={placeholder}
                name={name}
                maxLength={maxLength}
                {...(register && register(name))}
            />
            
            {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        </span>
    )
}

export default InputComponent