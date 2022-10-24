import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchUsuario from '../../componentes/buscarUsuario/buscarUsuario'
import { getAllUsers } from '../../redux/actions/getAllUsers'
import UserCard from '../../componentes/UserCard'
import Loading from '../../componentes/loading/loading';
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';

const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.state.usuarios);
    console.log(users)

    const loading = useSelector((state) => state.state.loading)


    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(setLoading(true));
        window.scrollTo(0, 0);
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
        return () => {
            dispatch(clearDetails())
        }
    }, [dispatch])

    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <React.Fragment>
                <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                    <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                        <Box as="main" p="10">
                            <SearchUsuario />
                            <div>
                                {users?.map((user, index) => {
                                    return (
                                        <div key={index}>
                                            <UserCard
                                                /* id={user._id} */
                                                name={user.name}
                                                picture={user.picture}
                                                email={user.email}
                                                activo={user.activo}
                                                compras={user.compras}
                                            />
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }
}

export default Users