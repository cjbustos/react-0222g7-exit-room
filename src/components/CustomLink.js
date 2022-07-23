import React from "react"

const CustomLink = (props) => {

    const { content, label, path } = props

    return (
        <li className='dropdown'>
            <a href={"#".concat(path)}>{label}</a>
            {
                content.length !== 0 &&
                <div className='dropdown-content'>
                    {content.map(e => <a key={e} href={"#".concat(path)}>{e}</a>)}
                </div>
            }
        </li>
    )
}

export default CustomLink