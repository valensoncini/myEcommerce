import { alertGenerico } from "../assets/alertGenerico";
import '../styles/CarritoCard.css'


function CarritoCard({funcionBorrado, item}){

    function borrar(){
        alertGenerico("error", "Producto Eliminado", "Su producto fue eliminado con exito!", "Ok")
        funcionBorrado(item.id)
    }

    return(
        <>
            <div className="carritoCardContainer">
                <div className="startCarrito">
                    <img src={item.img} alt="imagen-item" />
                    <h2>{item.name}</h2>
                </div>
                <div className="middleCarrito">
                    <div className="unitPrice">
                        Precio Unitario
                        <p>${item.price}</p>
                    </div>
                    <div className="totalPrice">
                        Precio Total
                        <p>${item.price * item.cantidad} </p>
                    </div>
                    <span>{item.cantidad}</span>
                </div>
                <button onClick={borrar}>Eliminar</button>
            </div>
        </>
    )



}


export default CarritoCard;