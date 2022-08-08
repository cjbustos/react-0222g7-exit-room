import "../styles/CustomModal.css"
import React, { useContext, useState } from "react";
import { ShopCartContext } from "../App";
import ReactModal from "react-modal";
import Button from "./Button";

ReactModal.setAppElement("#root")

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
            <ReactModal  isOpen={isOpen} onRequestClose={toggleModal} className="Modal" overlayClassName="Overlay">
                <div className="modal-dialog">
                    {children}
                </div>
                <div className="modal-dialog-ok-button">
                    <Button className="button-small" onClick={handleModalClose}>{label}</Button>
                </div>
                <div className="modal-dialog-close-button">
                    <Button className="button-small" onClick={toggleModal}>Cancelar</Button>
                </div>
            </ReactModal>
        </div>
    )
}

export default CustomModal