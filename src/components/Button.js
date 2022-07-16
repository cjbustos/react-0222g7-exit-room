import styles from '../styles/button.module.css'
import { useState } from "react"

export default function Button(props) {

    const isNavbarElement = props.inNavbar
    const text = props.text

    const [toShow, setToShow] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.tagName.toLowerCase() === 'a' && e.target !== undefined) {
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
                setToShow(!toShow)
            }}>
                {toShow ? props.label : 'CERRAR'}
            </button>
            <div style={{
                color: props.style.color,
                backgroundColor: '#111111',
                opacity: 0.8,
                display: toShow ? "none" : 'block'
            }}>
                {text}
            </div>
            {<h1 className={styles.button}>Hola</h1>}
        </>
        )
    }
}