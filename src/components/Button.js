
const Button = ({ type = 'button', onClick, children, ...rest }) => {
    return (
        <button type={type} style={styles} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export default Button