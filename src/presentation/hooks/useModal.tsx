import { useState } from "react"
import { IModalData } from "../components/modal"

export function useModal() {
    const [modal, setModal] = useState<IModalData>({message: '', type: 'success'})

    function openCloseModal() {
        setModal({message: '', type: 'success'})
    }

    return {modal, setModal, openCloseModal}
}