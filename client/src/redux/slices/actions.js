import axios from "axios";
import {getHelados} from './index'
export const traerHelados = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/helados")
    .then(res => dispatch(getHelados(res.data)))
    .catch(error => console.log(error))
}