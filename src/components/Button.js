//import { useEffect, useState } from "react"

import { useState } from "react"

export default function Button(props) {

    const isNavbarElement = props.inNavbar
    let showText = false
    const text = props.text

    const [textToShow, setTextToShow] = useState([''])

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.tagName.toLowerCase() === 'a' && e.target !== undefined) {
            console.log(e.target.href.toLowerCase())
            window.history.replaceState({}, '', e.target.href.toLowerCase())
        }
    }

    if (isNavbarElement) {
        return (
            <button style={props.style} onClick={handleClick}>
                <a href={"/".concat(props.to)}>{props.label}</a>
            </button>
        )
    } else {
        return (<>
            <button style={props.style} onClick={() => {
                setTextToShow(showText ? text : '')
                showText = !showText
            }}>
                {props.label}
            </button>
            <div>{textToShow}</div>
        </>
        )
    }
}