export default function HeladoCard ({_id, name, description, image, price, stock, type }) {
    return (
        <div className="heladoCard">
            <h1>{name}</h1>
            <img src={image} alt = {name + ' image'}></img>
            <h1>{description}</h1>
            <h1>{price}</h1>
            <h1>{stock}</h1>
            <h1>{type}</h1>
        </div>
    )
}