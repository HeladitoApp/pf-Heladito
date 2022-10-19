import { useAuth0 } from "@auth0/auth0-react"
import LoginActionButton from "../../componentes/Login/LoginActionButton"
import Profile from "../../componentes/Login/Profile"

import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../componentes/loading/loading';
import { setLoading } from '../../redux/actions/loading';
import { useEffect } from "react";
import { Button, Center, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()
    // const { picture, email, name } = user
    const loading = useSelector((state) => state.state.loading)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setLoading(true));
    //     setTimeout(() => {
    //         dispatch(setLoading(false));
    //     }, 1500);
    // }, [dispatch]);

    // if (loading && isLoading) {
    //     return (
    //         <Loading />
    //     )
    // }

    const handleLogin = () => loginWithRedirect()
    const handleLogout = () => logout({ returnTo: window.location.origin })
    const handleSingUp = () => loginWithRedirect({ screen_hint: 'signup', })


    if (isLoading) {
        return <Loading />
    }

    return (
        <Center m={5}>
            {isAuthenticated ? (
                <VStack>
                    <Profile />
                    <LoginActionButton name={'Log Out'} onClick={handleLogout} color={'brandPrincipal'} />
                    <Link to={'/admin'} >
                        <Button colorScheme={'cyan'} >Go to Admin </Button>
                    </Link>

                </VStack>
            ) :
                <HStack mx={5}>
                    <LoginActionButton name={'Log In'} onClick={handleLogin} color={'brandSecundario'} />
                    <LoginActionButton name={'Sing Up'} onClick={handleSingUp} color={'brandTerciario'} />
                </HStack>}
        </Center>

    )

}

export default Login