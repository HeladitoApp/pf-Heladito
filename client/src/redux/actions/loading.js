import { changeLoading } from "../slices";

export const setLoading = (data) => (dispatch) => {
    dispatch(changeLoading(data))
}