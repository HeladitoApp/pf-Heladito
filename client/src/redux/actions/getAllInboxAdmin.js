import { getMessages} from "../slices";
import axios from "axios";

export const getAllInboxAdmin = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/allInboxAdmin`)
        .then(res => dispatch(getMessages(res.data)))
        .catch(e => console.log(e))
}