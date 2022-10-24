import axios from "axios"

export const updateProduct = (payload) => (dispatch) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/actualizarProducto`, payload)
    .catch(error => console.log(error))
}