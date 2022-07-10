import '../estilos/Navbar.css'
import Button from './Button'

const Navbar = () => {

    const listOfItems = [
        { id: 1, name: 'salas' },
        { id: 2, name: 'sucursales' },
        { id: 3, name: 'precios' },
        { id: 4, name: 'productos' },
        { id: 5, name: 'contacto' }
    ]

    return (
            <nav className="nav">
                <a href="/" className="site-title">Exit Room</a>
                <ul>
                    {listOfItems.map(item => (
                        <Button key={item.id} name={item.name} />
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