import { alertGenerico } from "../assets/alertGenerico";


function CarritoCard({funcionBorrado, item}){

    function borrar(){
        alertGenerico("error", "Producto Eliminado", "Su producto fue eliminado con exito!", "Ok")
        funcionBorrado(item.id)
    }

    return(
        <>
            <div className="carritoCardContainer">
                <img src={item.img} alt="imagen-item" />
                <h2>{item.name}</h2>
                <p>{item.description} </p>
                <div>
                    Precio unitario
                    <p>{item.price}</p>
                </div>
                <div>
                    Precio Total
                    <p>{item.price * item.cantidad} </p>
                </div>
                
                <span>{item.cantidad}</span>
                <br/>
                <button onClick={borrar}>Eliminar</button>
            </div>
        </>
    )



}


export default CarritoCard;