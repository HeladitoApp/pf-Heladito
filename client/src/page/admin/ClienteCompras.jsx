
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchUsuario from '../../componentes/buscarUsuario/buscarUsuario'
import { getAllUsers } from '../../redux/actions/getAllUsers'
import UserCard from '../../componentes/ComprasCard'
import Loading from '../../componentes/loading/loading';
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';
import { getCompraByEmail } from '../../redux/actions/getCompraByEmail'
import { useParams } from 'react-router'


const ClienteCompras = () => {

    const dispatch = useDispatch();
    const { email } = useParams()
    const compras = useSelector(state => state.state.compras);
    console.log(compras)

    const loading = useSelector((state) => state.state.loading)


    useEffect(() => {
        dispatch(getCompraByEmail(email));
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
                                {compras?.map((compra, index) => {
                                    return (
                                        <div key={index}>
                                            <UserCard
                                                id={compra._id}
                                                usuario={compra.usuario}
                                                productos={compra.productos}
                                                cantidad={compra.cantidad}
                                                createdAt={compra.createdAt}
                                                sumaTotal={compra.sumaTotal}
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

export default ClienteCompras