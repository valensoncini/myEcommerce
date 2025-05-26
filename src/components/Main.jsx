import { useEffect, useState } from 'react'
import '../styles/Main.css'
import '../styles/generalStyle.css'
import ExhibitionCard from '../complements/ExhibitionCard'
import { Link } from 'react-router-dom'



function Main(){
    const [exhibition,  setExhibition] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://68329e34c3f2222a8cb2decf.mockapi.io/exhibition')
        .then((rta) => rta.json())
        .then((data) => {
            setExhibition(data)
            setCargando(false)
        })
        .catch((error) => {
            console.error('Error:', error)
            setError("Hubo un problema con la carga de productos.")
            setCargando(false)
        });

    }, []);



    if(cargando){
        return <p>Cargando...</p>
    }else if(error){
        return <p>{error}</p>
    }else{
        return(
            <>
                <div className="mainContainer">
                    <div className="exhibitionContainer">
                        {exhibition.map((item) =>(
                            <ExhibitionCard item={item}/>
                        ))}
                    </div>
                    <Link to="/products"><button>Ver Productos</button></Link>
                </div>
            </>
    )
    }
    
}

export default Main;