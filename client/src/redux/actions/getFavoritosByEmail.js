import axios from "axios";
import { favByEmail } from "../slices";

export const getFavoritosByEmail = (email) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/favoritoscliente/${email}`)
        .then(res => dispatch(favByEmail(res.data)) )
        .catch(e => console.log(e))
}