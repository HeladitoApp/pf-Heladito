//import { addCompra } from "../slices";
import axios from "axios";

export const addPayment = (data) => (dispatch) => {
    console.log(data);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/payment`, data)
    .then(res => window.location.replace(res.data))
    .catch(error => console.log(error))
}