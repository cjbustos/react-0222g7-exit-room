import '../styles/Navbar.css'
import Button from './Button'

const Navbar = (props) => {

    const buttonStyle = {
        color: 'white',
        background: 'none',
        border: 'none',
        margin: 0,
        padding: 0,
        height: '25px',
        cursor: 'pointer',
        lineHeight: 23,
        fontSize: 20,
        fontWeight: 400,
        fontStyle: 'normal',
        fontFamily: 'Rationale'
    }

    const data = props.data

    return (
        <nav className="nav">
            <a href="/" className="site-title">Exit Room</a>
            <ul>
                {data.map(item => (
                    <li key={item.id}><Button style={buttonStyle} label={item.name} to={item.name} inNavbar={true} /></li>
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