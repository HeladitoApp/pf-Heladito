import { getToppingDetails } from "../slices";
import axios from "axios";

export const traerExtraById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/extras/${id}`)
        .then(res => dispatch(getToppingDetails(res.data)))
        .catch(e => console.log(e))
}