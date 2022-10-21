import { getTypes } from "../slices";
import axios from "axios";
import { getProdsFromDb } from "./products";

export const getTypesFromProducts = () => async(dispatch) => {
    const productos = await axios.get(`${process.env.REACT_APP_SERVER_URL}/productos`).data;
    
    const types = productos.map((p)=>{
        return [new Set([...types, p.type])]
    //    [new Set([...types, p.type])]
    });
    return dispatch(getTypes(types));
}