import styles from './styles.module.scss'

interface InputProps {
    placeholder?: string
    type: 'submit' | 'password' | 'date' | 'email' | 'text'
    name: string
    maxLength?: number
    register?: any
    text: string
    forName: string
    uppercase?: boolean
}

const InputComponent = ({ placeholder, type, name, maxLength, register, forName, uppercase, text }: InputProps): JSX.Element => {

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
        </span>
    )
}

export default InputComponent