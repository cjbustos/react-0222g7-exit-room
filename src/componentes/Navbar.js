import '../estilos/Navbar.css'

export default function Navbar() {

    return <nav className="nav">
        <a href="/" className="site-title">Exit Room</a>
        <ul>
            <li><a href="/salas">Salas</a></li>
            <li><a href="/sucursales">Sucursales</a></li>
            <li><a href="/precios">Precios</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
    </nav>
}