import { useState } from "react"

export default function Button(props) {

    const text = props.text

    const [toShow, setToShow] = useState(true)

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
    </>
    )

}