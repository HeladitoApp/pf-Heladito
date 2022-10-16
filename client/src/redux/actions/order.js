import { orderByPrice } from "../slices";
import axios from "axios";

export const priceSort = (order, type) => (dispatch) => {
    dispatch(orderByPrice(order))   
}