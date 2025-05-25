import '../styles/ProductsCard.css'
import { Link } from 'react-router-dom';


function ProductsCard({item}){

     return(
        <>
            <div className="cardContainer">
               <img src={item.img} alt="imagen-item" />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <Link to={"/productos/" + item.id}><button>Ver Producto</button></Link>
            </div>
        </>
    )

}


export default ProductsCard;