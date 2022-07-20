import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

const CustomModal = (props) => {

    const { openLabel, closeLabel, description } = props
    
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleModal}>{openLabel}</button>
            <Modal isOpen={isOpen} onRequestClose={toggleModal}>
                <div>
                    {description}
                </div>
                <button onClick={toggleModal}>{closeLabel}</button>
            </Modal>
        </div>
    )
}

export default CustomModal