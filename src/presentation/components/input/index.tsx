'use-client'

import styles from './styles.module.scss'
import ReactInputMask from 'react-input-mask'

interface InputProps {
    placeholder?: string
    type: 'password' | 'date' | 'email' | 'text'
    name: string
    maxLength?: number
    register?: any
    text: string
    forName: string
    uppercase?: boolean
    options?: any[]
    useMask?: string
    maskplaceholder?: '' | '_'
}

const InputComponent = ({ placeholder, type, name, maxLength, register, forName, useMask, maskplaceholder, uppercase, text }: InputProps): JSX.Element => {

    return(
        <span className={styles.span}>
            <label htmlFor={forName} className={`${styles.label} ${uppercase === true ? styles.uppercase : ""}`}>
            {text}
            </label>
            {
                    useMask !== undefined ? 
                        <ReactInputMask
                            value={''}
                            className={styles.input}
                            type="text"
                            placeholder={placeholder}
                            mask={useMask}
                            maskPlaceholder={maskplaceholder}
                            {...(register && register(name))}
                        />

                        :

                        <input 
                            className={styles.input}
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            maxLength={maxLength}
                            {...(register && register(name))} 
                        />

            }
        </span>
    )
}

export default InputComponent