import CarritoCard from "../complements/CarritoCard";

function Carrito({productos, borrarProducto}){

    const total = productos.reduce(
            (subtotal,producto) => subtotal + producto.price * producto.cantidad, 0        )

    function borrarProductoCarrito(id){
            borrarProducto(id)
    }

    return(
        <div className="carritoContainer">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Amount</th>
                    <th>Options</th>
                </tr>
                <tr>
                    <td>
                        {productos.length > 0 ? productos.map((item) =>(
                                <CarritoCard 
                                    item={item}
                                    funcionBorrado={borrarProductoCarrito}
                                />
                        )) : <p>Carrito Vacio</p>}
                        {total > 0 ? <span>total: {total}$</span> : <></>}
                    </td>
                </tr>

            </table>
        </div>
    )
}



export default Carrito;