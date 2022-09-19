import "../styles/Navbar.css";
import Link from "./Link";
import ShoppingCart from "./ShoppingCart";

const Navbar = (props) => {
  const { opt } = props;

  if (opt === undefined) return null;

  return (
    <nav>
      <ul>
        {opt.map((elem, index) => (
          <Link key={index} label={elem.label} path={elem.path} />
        ))}
        <ShoppingCart />
      </ul>
    </nav>
  );
};

export default Navbar;
