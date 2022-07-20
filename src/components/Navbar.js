import '../styles/Navbar.css'
import CustomLink from './CustomLink'

const Navbar = (props) => {

    const { data } = props

    return (
        <nav>
            <ul>
                {data
                    .map(e => <CustomLink
                        key={e.id}
                        id={e.id}
                        label={e.label}
                        path={e.path}
                        content={e.subcategory ? e.content : undefined} />
                    )}
            </ul>
        </nav>
    )
}

/* data.filter(f => f.subcategory).map(item => (<CustomLink key={item.id} path={item.name} content={item.content} />)) */

//Componente Contenedor de sección
//Componente Contacto
//Componente Formulario
//Componente Redes Sociales

export default Navbar