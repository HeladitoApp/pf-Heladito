import axios from "axios"

export const sendEmail = (payload) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/sendEmail`, payload)
    .catch(error => console.log(error))
}