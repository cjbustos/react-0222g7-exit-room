import React from "react"

const CustomLink = (props) => {

    const { content, label, path } = props

    return (
        <li className='dropdown'>
            <a href={"#".concat(path)}>{label}</a>
            {
                content.length !== 0 &&
                    <div className='dropdown-content'>
                        {content.map(e => <a key={e.id} href={"#".concat(path)}>{e.name}</a>)}
                    </div>
            }
        </li>
    )
}

export default CustomLink