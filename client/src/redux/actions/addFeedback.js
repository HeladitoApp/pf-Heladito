import axios from "axios"

export const addFeedback = (payload) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/feedback`, payload)
    .catch(error => console.log(error))
}