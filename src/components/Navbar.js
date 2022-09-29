import { useState } from "react";
import "../styles/Navbar.css";
import Link from "./Link";
import ShoppingCart from "./ShoppingCart";
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
            <Image path={logo} width={90} height={90} position={"left"} />
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>

        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            {opt.map((elem, index) => (
              <Link key={index} label={elem.label} path={elem.path} />
            ))}
          </ul>
          <div className="cart">
            <ShoppingCart />
          </div>
        </div>
      </nav>
    );
}
