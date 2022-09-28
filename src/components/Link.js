const Link = (props) => {

    const { label, path } = props

    console.log(path);

    return (
        <li>
            <a href={"#".concat(path)}>{label}</a>
        </li>
    )

}

export default Link