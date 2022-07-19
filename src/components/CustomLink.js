import React from "react"

const CustomLink = (props) => {

    const { content, label, path } = props

    return (
        <li className='dropdown'>
            <a href={"#".concat(path)}>{label}</a>
            <div className='dropdown-content'>
                {content !== undefined ? content.map(e => <a key={e} href={"#".concat(path)}>{e}</a>) : label}
            </div>
        </li>
    )
}

export default CustomLink