import Button from '../button'
import styles from './styles.module.scss'

export interface IModalData {
    message: string,
    buttonText?: string,
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
                <div className={styles.button}>
                    <Button text={modal.buttonText ? modal.buttonText : "Ok"} onClick={handleClick} type="button" />
                </div>
            </div>
        </div>
    )
}

export default Modal