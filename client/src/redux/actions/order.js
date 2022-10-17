import { orderByPrice } from "../slices";

export const priceSort = (order) => (dispatch) => {
    dispatch(orderByPrice(order))   
}