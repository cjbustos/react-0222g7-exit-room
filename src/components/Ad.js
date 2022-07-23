import { useState } from "react"

const Ad = () => {

    const promos = ['Content1', 'Content2', 'Content3']

    const style = {
        height: 50,
        width: '100%',
        backgroundColor: '#C65385',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

    const [banner, setBanner] = useState(true)

    function eventHandler() {
        setBanner(!banner)
    }

    return (
        banner &&
        <div>
            <div style={style}>
                {
                    banner ? promos.map((promo, index) => <h3 key={index}>{promo}</h3>) : undefined
                }
                <button style={{color: '#FFFFFF', marginLeft: 'auto', border: 'none', backgroundColor: style.backgroundColor, fontSize: '20px', padding: '12px'}} onClick={eventHandler}>X</button>
            </div>
        </div>

    )

}

export default Ad