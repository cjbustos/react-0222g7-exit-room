
export default function Button(props) {

    return (
        <li>
            <a href={"/".concat(props.name)}>{props.name}</a>
        </li>
    )
}