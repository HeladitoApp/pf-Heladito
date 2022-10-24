import { Box } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchUsuario from '../../componentes/buscarUsuario/buscarUsuario'
import { getAllUsers } from '../../redux/actions/getAllUsers'

const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.state.usuarios);
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])


    return (
        <React.Fragment>
            <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="10">
                        <SearchUsuario />

                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Users