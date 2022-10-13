export default function ProductosCard ({_id, name, description, image, price, type, stock}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <h1>{price}</h1>
            <h1>{stock}</h1>
            <h1>{type}</h1>
            <img src={image} alt = {name + ' image'}></img>
        </div>
    )
}