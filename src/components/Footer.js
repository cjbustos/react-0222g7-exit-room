import "../styles/Footer.css"
import { IconContext } from "react-icons"
import { FiKey } from "react-icons/fi";
import { GiExitDoor } from "react-icons/gi";

const Footer = () => {
    return (
      <div>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FiKey />
          <GiExitDoor />
        </IconContext.Provider>
      </div>
    );
}

export default Footer