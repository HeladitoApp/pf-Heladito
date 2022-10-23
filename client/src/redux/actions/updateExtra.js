import axios from "axios"

export const updateExtra = (payload) => (dispatch) => {
    axios.put('http://localhost:3800/actualizarExtra', payload)
    .catch(error => console.log(error))
}