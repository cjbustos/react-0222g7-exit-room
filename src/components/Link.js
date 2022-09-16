const Link = (props) => {

    const { label, path } = props

    return (
        <li>
            <a href={"#".concat(path)}>{label}</a>
        </li>
    )

}

export default Link