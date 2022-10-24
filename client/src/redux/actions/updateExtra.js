import axios from "axios"

export const updateExtra = (payload) => (dispatch) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/actualizarExtra`)
    .catch(error => console.log(error))
}