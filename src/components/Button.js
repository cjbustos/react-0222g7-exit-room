//import { useEffect, useState } from "react"

export default function Button(props) {

    const isNavbarElement = props.inNavbar
    //const trigger = props.handler

    /* const [navButton, setNavButton] = useState(isNavbarElement)

    const handleClick = () => setNavButton(!navButton)

    useEffect(() => {
        //console.log(navButton)
        trigger()
    }) */

    if (isNavbarElement) {
        return (
            <button style={props.style}>
                <a href={"/".concat(props.to)}>{props.label}</a>
            </button>
        )
    } else {
        return (
            <button style={props.style} />
        )
    }
}