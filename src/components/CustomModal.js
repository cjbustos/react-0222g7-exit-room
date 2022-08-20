import "../styles/CustomModal.css"
import React, { useState } from "react";
import ReactModal from "react-modal";
import Button from "./Button";
import { ShopppingCartContext } from "../contexts/ShoppingCartContext";
import { useContext } from "react";

ReactModal.setAppElement("#root")

const CustomModal = ({ label, sizeButton, children }) => {

    const { updateCounter } = useContext(ShopppingCartContext)

    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    const handleModalClose = () => {
        toggleModal()
        updateCounter()
    }

    return (
        <div>
            <Button className={`button-${sizeButton}`} onClick={toggleModal}>{label}</Button>
            <ReactModal  isOpen={isOpen} onRequestClose={toggleModal} className="Modal" overlayClassName="Overlay">
                <div className="modal-dialog">
                    {children}
                </div>
                <div className="modal-dialog-ok-button">
                    <Button className={`button-${sizeButton}`} onClick={handleModalClose}>{label}</Button>
                </div>
                <div className="modal-dialog-close-button">
                    <Button className={`button-${sizeButton}`} onClick={toggleModal}>Cancelar</Button>
                </div>
            </ReactModal>
        </div>
    )
}

export default CustomModal