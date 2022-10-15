import axios from "axios"

export const addProduct = (payload) => (dispatch) => {
    axios.post('http://localhost:3800/createProducto', payload)
    .catch(error => console.log(error))
}