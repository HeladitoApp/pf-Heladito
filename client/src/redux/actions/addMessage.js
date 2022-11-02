import axios from "axios"

export const addMessage = (payload) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/adminInbox`, payload)
    .catch(error => console.log(error))
}