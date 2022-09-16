import "../styles/Footer.css"
import { IconContext } from "react-icons"
import { BsFacebook } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"

const Footer = (props) => {
    return (
        <div>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <BsFacebook />
                <FiInstagram />
            </IconContext.Provider>
        </div>
    )
}

export default Footer