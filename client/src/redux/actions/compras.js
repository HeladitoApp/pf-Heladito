//import { addCompra } from "../slices";
import axios from "axios";

export const addCompraDb = (data) => (dispatch) => {
    // console.log(data)
     console.log(data);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/addCompras`, data)
    
}