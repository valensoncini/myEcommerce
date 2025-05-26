import '../styles/Nav.css'
import '../styles/generalStyle.css'
import { Link } from 'react-router-dom';

function Nav({productosCarrito, user, admin})
{

    if(!user && !admin){
        return( 
            <>
                <div className="navContainer">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/carrito">Carrito <span>{productosCarrito.length ? productosCarrito.length : ""}</span></Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </>
        )

    }else if(user && !admin){
        return(
            <>
                <div className="navContainer">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/carrito">Carrito <span>{productosCarrito.length ? productosCarrito.length : ""}</span></Link></li>
                        <li><Link to="/login">User</Link></li>
                    </ul>
                </div>
            </>
        )

    }else if(!user && admin){
        return(
            <>
                <div className="navContainer">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/carrito">Carrito <span>{productosCarrito.length ? productosCarrito.length : ""}</span></Link></li>
                        <li><Link to="/login">User</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
            </>
        )

    }

}


export default Nav;