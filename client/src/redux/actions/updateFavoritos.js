import axios from "axios";

export const updateFavoritos = (payload) => (dispatch) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/actualizarFavoritos`, payload)
    .catch(error => console.log(error))
}