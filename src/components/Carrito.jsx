import CarritoCard from "../complements/CarritoCard";
import '../styles/Carrito.css'
import { Navigate } from "react-router-dom";

function Carrito({productos, borrarProducto, user}){

    const total = productos.reduce(
            (subtotal,producto) => subtotal + producto.price * producto.cantidad, 0        )

    function borrarProductoCarrito(id){
            borrarProducto(id)
    }

    if(!user){
        return(
            <Navigate to="/login" replace/>
        )
    }

    return(
        <div className="carritoContainer">
             {productos.length > 0 ? productos.map((item) =>(
                    <CarritoCard 
                        item={item}
                        funcionBorrado={borrarProductoCarrito}
                    />
            )) : <p className="emptyCard">Carrito Vacio</p>}
            {total > 0 ? <span className="total">total: {total}$</span> : <></>}
        </div>
    )
}



export default Carrito;