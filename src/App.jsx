import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./layouts/Home"
import Footer from "../src/components/Footer";
import Productos from "./components/Productos"
import Detalle from "./components/Detalle";
import Carrito from "./components/Carrito";
import { useState } from "react";


function App() {
  const [carrito, setCarrito] = useState([])


        function agregarCarrito(producto){
            const existe = carrito.find(p => p.id === producto.id)
                if(existe){
                const carritoActualizado = carrito.map((p) => {
                    if(p.id === producto.id){
                        const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                        return productoActualizado
                    }else{
                        return p
                    }
                })
                setCarrito(carritoActualizado)
            }else{
                let nuevoCarrito = [...carrito,producto]
                setCarrito(nuevoCarrito)
            }
        }


        function borrarDelCarrito(id){
            const nuevoCarrito = carrito.filter((p) => p.id !== id);
            setCarrito(nuevoCarrito);
        }


 

  return (
    <Router>
        <>
          <Nav productosCarrito={carrito}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/products' element={<Productos/>}/>
            <Route path='/productos/:id' element={<Detalle funcionAgregar={agregarCarrito}/>}/>
            <Route path='/carrito' element={<Carrito productos={carrito} borrarProducto={borrarDelCarrito} />}/> 
          </Routes>
          <Footer/>
        </>
    </Router>
  )
}

export default App
