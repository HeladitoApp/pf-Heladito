import { getToppings } from "../slices";
import axios from "axios";

export const getToppingsFromDb = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos/toppings`)
        .then(res => dispatch(getToppings(res.data)))
        .catch(e => console.log(e))
}