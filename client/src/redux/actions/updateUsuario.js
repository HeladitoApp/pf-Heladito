import axios from "axios"

export const updateUsuario = (payload) => (dispatch) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/actualizarUsuario`, payload)
    .catch(error => console.log(error))
}