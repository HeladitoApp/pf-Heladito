import { useAuth0 } from "@auth0/auth0-react";
import { Icon, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaAngleDoubleDown, FaArrowUp, FaUpDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCompraByEmail } from "../../redux/actions/getCompraByEmail";
import Compra from "./compra";

export default function ComprasCliente() {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const compras = useSelector(state => state.state.compras)
    console.log(compras);
    useEffect(() => {
        dispatch(getCompraByEmail(user.email))

    }, [])

    return (
        <TableContainer p={5} border={'1px'} borderColor={'gray.200'} borderRadius={'20px'}>
            <Table variant='striped' colorScheme='cyan' >
                <Thead color={'red'} h={'50px'} >
                    <Tr color={'red'}>
                        <Th>Nº Orden  </Th>
                        <Th>Productos</Th>
                        <Th>Fecha de compra</Th>
                        <Th>Metodo pago</Th>
                        <Th>Estado</Th>
                        <Th>Total de compra <Icon as={FaAngleDoubleDown} /></Th>
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
    )
}