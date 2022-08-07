import "../styles/CustomModal.css"
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { ShopCartContext } from "../App";

Modal.setAppElement("#root")

const CustomModal = ({ label, children }) => {

    const { counter } = useContext(ShopCartContext)
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    const handleModalClose = () => {
        counter()
        toggleModal()
    }

    return (
        <div>
            <Button className="button-small" onClick={toggleModal}>{label}</Button>
            <Modal isOpen={isOpen} onRequestClose={toggleModal}>
                <div className="modal-dialog">
                    {children}
                </div>
                <div className="modal-dialog-ok-button">
                    <Button className="button-small" onClick={handleModalClose}>{label}</Button>
                </div>
                <div className="modal-dialog-close-button">
                    <Button className="button-small" onClick={toggleModal}>Cancelar</Button>
                </div>
            </Modal>
        </div>
    )
}

export default CustomModal