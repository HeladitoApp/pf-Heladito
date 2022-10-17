import { getProductos } from "../slices";
import axios from "axios";
import swal from 'sweetalert';

export const getProdsFromDbByName = (name) => (dispatch) => {
    axios.get(`http://localhost:3800/productos?name=${name}`)
        .then(res => dispatch(getProductos(res.data)))
        .catch(e => console.log(e, swal({
            title:`No hay productos con el nombre "${name}"`,
            icon:"error",
            button: "volver"
        })))
}