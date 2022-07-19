import React from "react"

const Image = (props) => {

    const { path, alt, width, height, position } = props

    return (
        <img
            src={path}
            alt={alt}
            width={width}
            height={height}
            style={{ float: position }}
        />
    )
}

export default Image