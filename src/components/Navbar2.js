import { useState } from "react";
import "../styles/Navbar2.css";
import Link from "./Link";
import ShoppingCart from "./ShoppingCart";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../img/logo.png";
import Image from "./Image";

export default function Navbar(props) {

    const { opt } = props;

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    if(opt === undefined) return

    return (
        <nav className="navigation"> 
            <div className="logo1">
            <a href="/">
              <Image path={logo} width={115} height={110} position={"left"} />
            </a>
            </div>
            <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <HiMenuAlt3 /> 
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    {opt.map((elem, index) => (
                        <Link key={index} label={elem.label} path={elem.path} />
                    ))}
                </ul>
                <ShoppingCart />
            </div>
        </nav>
    );
}