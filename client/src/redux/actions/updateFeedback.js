import axios from "axios"

export const updateFeedback = (payload) => (dispatch) => {
    axios.put(`${process.env.REACT_APP_SERVER_URL}/actualizarFeedback`, payload)
    .catch(error => console.log(error))
}