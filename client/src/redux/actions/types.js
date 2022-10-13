import { getTypes } from "../slices";
import { getProdsFromDb } from "./products";

export const getTypesFromProducts = () => async(dispatch) => {
    const productos = await getProdsFromDb();
    const types = productos.map((p)=>{
       [...new Set([...types, p.type])]
    });
    return dispatch(getTypes(types));
}