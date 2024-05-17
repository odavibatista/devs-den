import styles from './styles.module.scss'
import { UseFormSetValue } from 'react-hook-form'

interface SelectProps {
    name: string
    register?: any
    text: string
    forName: string
    uppercase?: boolean
    options?: {name: string, value: number}[]
}

const Select = ({ name, register, forName, uppercase, text, options }: SelectProps): JSX.Element => {

    return(
        <span className={styles.span}>
            <label htmlFor={forName} className={`${styles.label} ${uppercase === true ? styles.uppercase : ""}`}>
            {text}
            </label>
            <select 
                className={styles.select}
                {...(register && register(name))}
            >
                {
                    options?.map((option, i) => (
                        <option key={i} value={option.value}>{option.name}</option>
                    ))
                }
            </select>
        </span>
    )
}

export default Select