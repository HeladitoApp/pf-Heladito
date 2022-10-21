import { getProductos } from "../slices";
import axios from "axios";
import swal from 'sweetalert';

export const getProdsFromDbByName = (name) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos?name=${name}`)
        .then(res => dispatch(getProductos(res.data)))
        .catch(e => console.log(e, swal({
            title:`No hay productos con el nombre "${name}"`,
            icon:"error",
            button: "volver"
        })))
}