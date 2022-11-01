import { useAuth0 } from "@auth0/auth0-react";
import { Box, Center, Heading, Icon, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaArrowUp, FaTumblrSquare, FaUpDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCompraByEmail } from "../../redux/actions/getCompraByEmail";
import Compra from "./compra";

export default function ComprasCliente() {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    let compras = useSelector(state => state.state.compras)
    const [FiltroCompra, setFiltroCompra] = useState(compras)
    let paginas = [];
    for (let i = 1; i < compras.length / 10 + 1; i++) { paginas.push(i) }
    const [paginit, setpaginit] = useState(0)
    const [pagfinal, setpagfinal] = useState(10)
    //pagina no lo que se muestra
    const currentCompras = compras.slice(paginit, pagfinal)
    function filtrarCompras() {
        // let array1 = []
        // array1 = compras.map((a, b) => { return a.sumaTotal - b.sumaTotal })
        // console.log(array1)
    }
    const PasarPagina = (e, p) => {
        if (p === "previous") {
            if (paginit !== 0) {
                setpaginit(paginit - 10)
                setpagfinal(pagfinal - 10)
            }
        } else if (p === "next") {
            if (compras.length > pagfinal) {
                setpaginit(paginit + 10)
                setpagfinal(pagfinal + 10)
            }
        }
        else {
            setpaginit(p * 10 - 10)
            setpagfinal(p * 10)
        }
    }
    useEffect(() => {
        dispatch(getCompraByEmail(user.email))
    }, [])

    return (
        <Box px={20} py={15}>
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
                        {currentCompras && currentCompras.map(c => (
                            <Compra
                                id={c._id}
                                usuario={c.usuario}
                                productos={c.productos}
                                createdAt={c.createdAt}
                                sumaTotal={c.sumaTotal}
                                pagado={c.pagado !== undefined ? c.pagado : true}
                                metodoDePago={c.metodoDePago ? c.metodoDePago : "Mercado pago"}
                            />
                        ))}
                    </Tbody>
                    <TableCaption>
                        <Center>
                            <Wrap spacing={5}>
                                <WrapItem cursor={'pointer'} onClick={(e) => PasarPagina(e, "previous")}>
                                    <Text>
                                        {"<previous"}
                                    </Text>
                                </WrapItem>
                                {paginas && paginas.map(p => (
                                    <WrapItem key={p} onClick={(e) => PasarPagina(e, p)} cursor={'pointer'}>
                                        <Text>
                                            {p}
                                        </Text>
                                    </WrapItem>
                                ))}
                                <WrapItem cursor={'pointer'} onClick={(e) => PasarPagina(e, "next")}>
                                    <Text>
                                        {"next>"}
                                    </Text>
                                </WrapItem>
                            </Wrap>
                        </Center>
                    </TableCaption>
                </Table>
            </TableContainer>
        </Box>
    )
}