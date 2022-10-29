import { getFeedbacks} from "../slices";
import axios from "axios";

export const getAllFeedbacks = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/allFeedbacks`)
        .then(res => dispatch(getFeedbacks(res.data)))
        .catch(e => console.log(e))
}