import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {traerHelados} from '../../redux/slices/actions'
import HeladoCard from '../../componentes/cardHelado'

export const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(traerHelados())
    }, [dispatch])

    const helados = useSelector((state) => state.data.helados)

    return (
        <div>
            {helados && helados?.map(helado => {
                return (
                    <HeladoCard 
                    key = {`${helado._id}`}
                    name = {helado.name}
                    description = {helado.description}
                    image = {helado.image}
                    price = {helado.price}
                    stock = {helado.stock}
                    type = {helado.type}
                    />
                )
            })}
        </div>
    )
}