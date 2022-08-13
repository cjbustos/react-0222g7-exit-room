import '../styles/Navbar.css'
import CustomLink from './CustomLink'
import ShoppingCart from './ShoppingCart'

const Navbar = (props) => {

    const { opt } = props

    if (opt === undefined) return null;

    return (
        <nav>
            <ul>
                {opt
                    .map(e => <CustomLink
                        key={e.id}
                        id={e.id}
                        label={e.label}
                        path={e.path}
                        content={e.subcategory ? e.content : []} />
                    )}
                <ShoppingCart />
            </ul>
        </nav>
    )
}

/* data.filter(f => f.subcategory).map(item => (<CustomLink key={item.id} path={item.name} content={item.content} />)) */

export default Navbar