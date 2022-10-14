import { useState } from "react";
import { useDispatch} from 'react-redux'
import { getProdsFromDbByName } from '../../redux/actions/searchBar';
export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    function handelInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handelSubmit(e) {
        e.preventDefault()
        console.log(name);
        dispatch(getProdsFromDbByName(name))
    }

    return (
        <span className="barra">
            <input type="text" placeholder="Buscar..."  onChange={ (e) => handelInputChange(e) } className = 'input'/>
            <button id = 'button' type="submit" onClick={(e) => handelSubmit(e) } >Buscar</button>
        </span>
    )

}
