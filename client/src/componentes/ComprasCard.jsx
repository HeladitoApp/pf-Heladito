import { Box, Flex, Image, Link, chakra, Center } from "@chakra-ui/react";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Loading from '../componentes/loading/loading';
import { clearDetails, compraByEmail } from '../redux/slices';
import { setLoading } from '../redux/actions/loading';
import { getCompraByEmail } from "../redux/actions/getCompraByEmail";
import carrito from '../assets/carrito.png';

const ComprasCard = () => {

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
            (compras === 0) ?
                <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                    <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                        <Box as="main" p="10">
                            <Flex
                                bg="#FFECF8"
                                _dark={{ bg: "#3e3e3e" }}
                                p={50}
                                /* w="full" */
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    w="xl"
                                    mx="auto"
                                    py={4}
                                    px={8}
                                    bg="white"
                                    _dark={{ bg: "gray.800" }}
                                    shadow="lg"
                                    rounded="lg"
                                >
                                    <chakra.h2
                                        color="#ff66c4"
                                        _dark={{ color: "white" }}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        mt={{ base: 2, md: 0 }}
                                        fontWeight="bold"
                                    >
                                        {email}
                                    </chakra.h2>
                                    {compras.map((compra, index) => {
                                        return (
                                            <div key={index}>

                                                <chakra.h3 mt={2} color="#5CE1E6" _dark={{ color: "gray.200" }} fontWeight="bold">
                                                    Nº de Orden: {compra._id}
                                                </chakra.h3>
                                                <chakra.h3 mt={2} color="#5CE1E6" _dark={{ color: "gray.200" }} fontWeight="bold">
                                                    {/* Fecha de compra: {compra.createdAt} */}
                                                </chakra.h3>
                                                <chakra.p fontWeight="semibold">
                                                    Producto/s:
                                                </chakra.p>
                                                {compra.productos.map((product, index) => {
                                                    return (
                                                        <chakra.p key={index} alignItems='center'>
                                                            <Box>{product.name} - ({product.quantity} unidad/es)</Box>
                                                            <Box>Precio: $/{product.price}</Box>
                                                        </chakra.p>
                                                    )
                                                })}
                                                <Flex justifyContent="end" mt={4}>
                                                    <Box fontSize="xl" color="#ff66c4" _dark={{ color: "brand.300" }}>
                                                        Total: $/ {compra.sumaTotal}
                                                    </Box>
                                                </Flex>
                                            </div>
                                        )
                                    })}
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                :
                <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                    <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                        <Box as="main" p="10">
                            <Flex
                                bg="#FFECF8"
                                _dark={{ bg: "#3e3e3e" }}
                                p={50}
                                /* w="full" */
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    w="xl"
                                    mx="auto"
                                    py={4}
                                    px={8}
                                    bg="white"
                                    _dark={{ bg: "gray.800" }}
                                    shadow="lg"
                                    rounded="lg"
                                    textAlign='center'
                                >
                                    <chakra.h2
                                        color="#ff66c4"
                                        _dark={{ color: "white" }}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        mt={{ base: 2, md: 0 }}
                                        fontWeight="bold"
                                    >
                                        {email}
                                    </chakra.h2>

                                    <Center>
                                        <chakra.p fontWeight="semibold">
                                            No tiene registro de compras realizadas
                                        </chakra.p>
                                        <Image src={carrito} w='5em' />
                                    </Center>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>


        );
    }
}

export default ComprasCard





