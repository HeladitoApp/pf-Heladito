import axios from "axios"

export const addProduct = (payload) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/createProducto`, payload)
    .catch(error => console.log(error))
}