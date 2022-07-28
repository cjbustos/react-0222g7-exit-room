import { ButtonWithStyle } from "./button.styled"

const Button = ({ type = 'button', onClick, children, ...rest }) => {
    return (
        <ButtonWithStyle type={type} onClick={onClick} {...rest}>
            {children}
        </ButtonWithStyle>
    )
}

export default Button