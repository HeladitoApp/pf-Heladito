import axios from "axios"

export const updateUsuario = (payload) => (dispatch) => {
    axios.put('http://localhost:3800/actualizarUsuario', payload)
    .catch(error => console.log(error))
}