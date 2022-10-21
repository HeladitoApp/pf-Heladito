import axios from "axios"

export const updateProduct = (payload) => (dispatch) => {
    axios.put('http://localhost:3800/actualizarProducto', payload)
    .catch(error => console.log(error))
}