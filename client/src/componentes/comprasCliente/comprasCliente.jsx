import { useAuth0 } from "@auth0/auth0-react";
import { Box, Heading, Icon, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaArrowUp, FaUpDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCompraByEmail } from "../../redux/actions/getCompraByEmail";
import Compra from "./compra";

export default function ComprasCliente() {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    let compras = useSelector(state => state.state.compras)
    const [FiltroCompra, setFiltroCompra] = useState(compras)

    function filtrarCompras() {
        // const filtrocompra = FiltroCompra.sort(function (a, b) {
        //     if (a.sumaTotal > b.sumaTotal) {
        //         return 1;
        //     }
        //     if (a.sumaTotal < b.sumaTotal) {
        //         return -1;
        //     }
        //     return 0;
        // })
        // console.log(filtrocompra)
    }
    useEffect(() => {
        dispatch(getCompraByEmail(user.email))
    }, [])

    return (
        <Box p={20} pt={15}>
            <Heading textAlign={'center'} pb={4}>Historial de compras</Heading>
            <TableContainer p={5} border={'1px'} borderColor={'gray.200'} borderRadius={'20px'}>
                <Table variant='striped' colorScheme='cyan' >
                    <Thead color={'red'} h={'50px'} >
                        <Tr color={'red'}>
                            <Th>Nº Orden  </Th>
                            <Th>Productos</Th>
                            <Th>Fecha de compra</Th>
                            <Th>Metodo pago</Th>
                            <Th>Estado</Th>
                            <Th onClick={() => filtrarCompras()}>Total de compra <Icon as={FaAngleDoubleDown} /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {compras && compras.map(c => (
                            <Compra
                                id={c._id}
                                usuario={c.usuario}
                                productos={c.productos}
                                createdAt={c.createdAt}
                                sumaTotal={c.sumaTotal}
                            />
                        ))}

                    </Tbody>

                </Table>
            </TableContainer>
        </Box>
    )
}