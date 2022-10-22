import { filterByType } from "../slices/index";
import axios from "axios";

export const typeFilter = (type) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos/tipos/${type}`)
        .then(res => dispatch(filterByType(res.data.message)))
        .catch(e => console.log(e))
}