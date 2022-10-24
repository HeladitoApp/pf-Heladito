import { getToppingDetails } from "../slices";
import axios from "axios";

export const traerExtraById = (id) => (dispatch) => {
    axios.get(`http://localhost:3800/extras/${id}`)
        .then(res => dispatch(getToppingDetails(res.data)))
        .catch(e => console.log(e))
}