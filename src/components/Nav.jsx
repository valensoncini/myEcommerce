import '../styles/Nav.css'
import { Link } from 'react-router-dom';

function Nav({productosCarrito}){


    return(
        <>
            <div className="navContainer">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/">Sobre Nosotros</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                    <li><Link to="/carrito">Carrito <span>{productosCarrito.length ? productosCarrito.length : ""}</span></Link></li>
                    <li><Link to="/">User</Link></li>
                    
                </ul>
            </div>
        </>
    )
}


export default Nav;