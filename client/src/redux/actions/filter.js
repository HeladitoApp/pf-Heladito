import { filterByType } from "../slices";
import axios from "axios";

export const filteredProducts = (type) => async(dispatch) => {
    try {
        const allProductos = await axios.get(`${process.env.REACT_APP_SERVER_URL}/productos`).data;
        const typeProducts = allProductos.filter((p)=> p.type === type);
        return dispatch(filterByType(typeProducts))
    } catch (error) {
        console.log(error);
    }
}