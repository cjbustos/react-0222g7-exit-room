import '../styles/Navbar.css'
//import CustomLink from './CustomLink'
import Link from './Link'
import ShoppingCart from './ShoppingCart'

const Navbar = (props) => {

    const { opt } = props

    if (opt === undefined) return null;

    return (
        <nav>
            <ul>
                {opt.map((elem, index) => <Link
                    key={index}
                    label={elem.label}
                    path={elem.path}
                />)}
                <ShoppingCart />
            </ul>
        </nav>
    )
}

export default Navbar


/* data.filter(f => f.subcategory).map(item => (<CustomLink key={item.id} path={item.name} content={item.content} />)) */
/*  
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
*/