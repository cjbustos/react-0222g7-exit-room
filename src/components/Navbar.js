import '../styles/Navbar.css'
import Button from './Button'

const Navbar = () => {

    const listOfItems = [
        { id: 1, name: 'salas' },
        { id: 2, name: 'sucursales' },
        { id: 3, name: 'precios' },
        { id: 4, name: 'productos' },
        { id: 5, name: 'contacto' }
    ]

    const buttonStyle = {
        color: 'white',
        background: 'none',
        border: 'none',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
    }

    const handleClick = () => {
        console.log('From parent component...')
    }

    return (
        <nav className="nav">
            <a href="/" className="site-title">Exit Room</a>
            <ul>
                {listOfItems.map(item => (
                    <li key={item.id}><Button style={buttonStyle} label={item.name} to={item.name} inNavbar={true} handler={handleClick} /></li>
                ))}
            </ul>
        </nav>
    )
}

//Componente Contenedor de sección
//Componente Contacto
//Componente Formulario
//Componente Redes Sociales

export default Navbar