import { getToppings } from "../slices";
import axios from "axios";

export const getToppingsFromDb = () => (dispatch) => {
    axios.get('http://localhost:3800/productos/toppings')
        .then(res => dispatch(getToppings(res.data)))
        .catch(e => console.log(e))
}