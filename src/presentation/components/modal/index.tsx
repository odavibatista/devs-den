import Button from '../button'
import styles from './styles.module.scss'

export interface IModalData {
    message: string,
    type: 'success' | 'error' | 'warning'
}

interface ModalProps {
    modal: IModalData,
    openCloseModal: () => void,
}

const Modal = ({modal, openCloseModal}: ModalProps) => {
    const { message, type } = modal

    const handleClick = (): void => {
        openCloseModal()
    }

    return (
        <div className={styles.modal_open}>
            <div className={styles.modal}>
                <p className={styles.message}>{message}</p>
            </div>
            <div className={styles.button}>
                <Button text='Ok' onClick={handleClick} type="button" className={styles.button}/>
            </div>
        </div>
    )
}

export default Modal