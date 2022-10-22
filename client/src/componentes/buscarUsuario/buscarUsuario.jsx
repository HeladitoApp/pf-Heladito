import { useState } from "react";
import { useDispatch} from 'react-redux'
import { traerUsuarios } from '../../redux/actions/getUsuarioByName';
export default function SearchUsuario () {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    function handelInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handelSubmit(e) {
        e.preventDefault()
        dispatch(traerUsuarios(name))
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { dispatch(traerUsuarios(name)) }
    };

    return (
        <span className="barra">
            <input type="text" placeholder="Buscar usuario..."  onChange={ (e) => handelInputChange(e) } className = 'input' onKeyDown={handleKeyDown} />
            <button id = 'button' type="submit" onClick={(e) => handelSubmit(e) } >Buscar</button>
        </span>
    )

}
