import { orderByPrice } from "../slices";
import axios from "axios";

export const priceSort = (order) => (dispatch) => {
    axios.get('http://localhost:3800/productos')
    .then(res=>res.data)
    .then(res=>res.sort((a, b) => {
        if(a.price < b.price) {
            return order === "ascendente" ? -1 : 1;
        }
        if(a.price > b.price) {
            return order === "ascendente" ? 1 : -1;
        }
        return 0;
    }))
    .then(res => dispatch(orderByPrice(res)))
    .catch(e => console.log(e))
}