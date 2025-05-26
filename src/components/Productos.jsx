import { useState, useEffect } from "react";
import ProductsCard from "../complements/ProductsCard";
import '../styles/Productos.css'
import '../styles/generalStyle.css'


function Productos(){
    const [productos,  setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {   
            fetch('https://68329e34c3f2222a8cb2decf.mockapi.io/products')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos)
                setCargando(false)
            })
            .catch((error) => {
                 console.error('Error:', error)
                 setError("Hubo un problema con la carga de productos.")
                 setCargando(false)
            });
        }, []);

    if(cargando){
        return <p>Cargando productos...</p>
    }else if(error){
        return <p>{error}</p>
    }else{ 
        return(
            <>
                <div className="productsContainer">
                    {productos.map((item) => (
                        <ProductsCard
                            item={item}  
                        />
                    ))}
                </div>
            </>
        )
    }
}


export default Productos;