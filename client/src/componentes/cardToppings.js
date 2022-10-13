export default function ToppingsCard ({_id, name, description, image, price, stock, type }) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{stock}</h1>
            <h1>{type}</h1>
            <img src={image} alt = {name + ' image'}></img>
        </div>
    )
}