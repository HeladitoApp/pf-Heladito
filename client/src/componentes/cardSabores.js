export default function SaboresCard({_id, name, image}) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt = {name + ' image'}></img>
        </div>
    )
}