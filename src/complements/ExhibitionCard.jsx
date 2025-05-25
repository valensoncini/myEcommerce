import '../styles/ExhibitionCards.css'

function ExhibitionCard({item}){

    return(
        <div className="exhibitionCardContainer">
            <img src={item.img} alt="product image" />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
        </div>
    )
}

export default ExhibitionCard;