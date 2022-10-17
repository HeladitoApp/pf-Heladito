import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../componentes/loading/loading';
import { setLoading } from '../../redux/actions/loading';

const Login = () => {
    const loading = useSelector((state) => state.state.loading)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    },[dispatch]);

    if(loading){
        return(
            <Loading/>
        )
    }
    else {
    return (
        <div>Login</div>
    )
}
}

export default Login