import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { addProduct } from "../../redux/actions/addProduct";
import './addProductos.css'
function control(input) {
    let error = {}
    if(!input.name) error.name = 'Nombre es necesario'
    else if (!input.description) error.description = 'Una descripcion es necesaria'
    else if (!input.image) error.image = 'Una imagen es necesaria'
    else if (!input.price) error.price = 'El precio es necesario'
    else if (!input.stock) error.stock = 'El sotck es necesario'
    else if (!input.type) error.stock = 'El tipo de producto es necesario'
    return error
}

export default function AgregarProducto() {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        type: ''
    })
    function handleInputsChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(control({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    function handleSelectType(e) {
        setInput({
            ...input,
            type: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(input.name &&
            input.description &&
            input.image && 
            input.price &&
            input.stock &&
            input.type) {
                dispatch(addProduct(input))
                alert('Producto creado con exito!')
                setInput({
                    name: '',
                    description: '',
                    image: '',
                    price: '',
                    stock: '',
                    type: ''
                })
            }
            else {
                alert('Porfavor complete todos los campos para continuar')
            }
    }

    return (
        <section className="todo">
            <div className="info">
            <Link id="ToHome" to='/'>
                <button className = 'ToHome'>Volver al inicio</button>
            </Link>
                <h1 id = 'titulo'>COMPLETE TODOS LOS CAMPOS</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <article>
                        <label className="titulo">Nombre</label>
                        <input type="text" className="inputs" value={input.name} name = 'name'
                        onChange={(e) => handleInputsChange(e)}
                        />
                        {errors.name && ( <p className="error">{errors.name}</p>)}
                    </article>
                    <article>
                        <label className="titulo">Descipcion</label>
                        <input type="text" className="inputs" value={input.description} name = 'description'
                        onChange={(e) => handleInputsChange(e)}
                        />
                        {errors.description && ( <p className="error">{errors.description}</p>)}
                    </article>
                    <article>
                        <label className="titulo">Imagen</label>
                        <input type="url" className="inputs" value={input.image} name = 'image'
                        onChange={(e) => handleInputsChange(e)}
                        />
                        {errors.image && ( <p className="error">{errors.image}</p>)}
                    </article>
                    <article>
                        <label className="titulo">Price</label>
                        <input type="number" className="inputs" value={input.price} name = 'price'
                        onChange={(e) => handleInputsChange(e)}
                        />
                        {errors.price && ( <p className="error">{errors.price}</p>)}
                    </article>
                    <article>
                        <label className="titulo">Stock</label>
                        <input type="number" className="inputs" value={input.stock} name = 'stock'
                        onChange={(e) => handleInputsChange(e)}
                        />
                        {errors.stock && ( <p className="error">{errors.stock}</p>)}
                    </article>
                    <article>
                        <select className = 'tipos'  id="selectTipo"  defaultValue={'plaseholder'} onChange = {e => handleSelectType(e)}>
                            <option hidden value='plaseholder'>Elige un tipo de producto</option>
                            <option value="helados">Helados</option>
                            <option value="combos">Combos</option>
                            <option value="bombones">Bombones</option>
                            <option value="shakes">Shakes</option>
                            <option value="parfaits">Parfaits</option>
                            <option value="crepes">Crepes</option>
                        </select>
                        {errors.type && ( <p className="error">{errors.type}</p>)}
                    </article>
                    <button id="addButton" type='submit'>¡AGREGAR PRODUCTO!</button>
                </form>
            </div>
        </section>
    )
}

// "helados", "combos", "bombones", "shakes", "parfaits", "crepes"