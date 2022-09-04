import "../styles/Button.css";

const Button = ({ type = "button", disabled, onClick, children, ...rest }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
