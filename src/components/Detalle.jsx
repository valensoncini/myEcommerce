import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/Detalle.css'
import { alertGenerico } from "../assets/alertGenerico";
import { Navigate } from "react-router-dom";


function Detalle({funcionAgregar, user}){

    const {id} = useParams();
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)


     useEffect(() => {   
                fetch('https://68329e34c3f2222a8cb2decf.mockapi.io/products')
                .then((respuesta) => respuesta.json())
                .then((datos) => {
                    const productoEncontrado = datos.find((item) => item.id === id);
                   if(productoEncontrado){
                        setProducto(productoEncontrado)
                    }else{
                        setError("Producto no encontrado")
                    }
                    setCargando(false)
                })
                .catch((error) => {
                     console.error('Error:', error)
                     setError("Hubo un problema con la carga de productos.")
                     setCargando(false)
                });
            }, [id]);

        if(cargando){
            return <p>Cargando productos...</p>
        }else if(error){
            return <p>{error}</p>
        }else if(!producto) return null;

        function addCart(){
            if(cantidad < 1 ) return;
            alertGenerico("success", "Producto Agregado", "Su producto fue agregado con exito al carrito!", "Ok");
            funcionAgregar({...producto,cantidad});  
        }

        function sumar(){
            setCantidad(cantidad + 1)
        }

        function restar(){
            if(cantidad > 1){ 
                setCantidad(cantidad - 1)
            }
       
        }

        if(!user){
            return(
                <Navigate to="/login" replace/>
            )
        }

        return (
        <> 
            <div className="detalleContainer">
               <img src={producto.img} alt="imagen-item" />
                <h2 id="detalleName">{producto.name}</h2>
                <p id="detalleDescrip">{producto.description} </p>
                <p id="detallePrice">$ {producto.price}</p>
                <div className="detalleCantidad">
                    <button onClick={restar}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={sumar}>+</button>
                </div>
                <button onClick={addCart} id="detalleAdd">Agregar</button>
            </div>
        </>
    )



}

export default Detalle;