import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./layouts/Home"
import Footer from "../src/components/Footer";
import Productos from "./components/Productos"
import Detalle from "./components/Detalle";
import Carrito from "./components/Carrito";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Admin from "./components/Admin";
import '../src/styles/generalStyle.css'
import { Navigate } from "react-router-dom";


function App() {
  const [carrito, setCarrito] = useState([])
  const [userLogeado, setUserLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)



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

        function setAdmin(){
            setAdminLogeado(!adminLogeado)
        }

        function setUser(){
            setUserLogeado(!userLogeado)
        }
  return (
    <Router>
        <div className="contenedorGeneral">
          <Nav productosCarrito={carrito} user={userLogeado} admin={adminLogeado}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/products' element={<Productos/>}/>
            <Route path='/productos/:id' element={<Detalle funcionAgregar={agregarCarrito} user={userLogeado} />}/>
            <Route path='/carrito' element={<Carrito productos={carrito} borrarProducto={borrarDelCarrito} user={userLogeado}/>}/> 
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login user={userLogeado} admin={adminLogeado} setLogeadoAdmin={setAdmin} setLogeadoUSer={setUser}/>} />
            <Route path="/admin" element={adminLogeado ? <Admin/> : <Navigate to={"/login"} replace/>} />
          </Routes>
          <Footer/>
        </div>
    </Router>
  )
}

export default App
