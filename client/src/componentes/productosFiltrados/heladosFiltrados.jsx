import { useDispatch } from "react-redux"
import { typeFilter } from "../../redux/actions/typeFilter"
export default function HeladosFiltrados () {
    const dispatch = useDispatch()
    function filtrar(e) {
        e.preventDefault()
        console.log('Hola');
        dispatch(typeFilter(e.target.value))
    }
    return (
        <button value = 'helados' onClick={e => filtrar(e)}>Helados</button>
        )
}