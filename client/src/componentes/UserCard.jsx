import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import avatar from '../assets/usuario.png';

const UserCard = ({ name, picture, email, activo, compras }) => {

    console.log(activo)
    return (

        
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
                    <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
                        <Image
                            w={20}
                            h={20}
                            fit="cover"
                            rounded="full"
                            borderStyle="solid"
                            borderWidth={2}
                            color="brand.500"
                            _dark={{ color: "brand.400" }}
                            alt="Testimonial avatar"
                            src={picture ? picture : avatar}
                        />
                    </Flex>

                    <chakra.h2
                        color="#ff66c4"
                        _dark={{ color: "white" }}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        mt={{ base: 2, md: 0 }}
                        fontWeight="bold"
                    >
                        {name}
                    </chakra.h2>

                    <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.200" }}>
                        {email}
                        {compras?.map((e, index) => {
                            return (
                                <div key={index}>
                                    <Box fontSize='md' color='#5CE1E6' fontWeight='bold'>Nº Orden:{` ${e._id}`}</Box>
                                    <Box>{e.productos?.map((el, index) => {
                                        return (
                                            <div key={index}>
                                                <Box fontSize='sm'>Producto:{` ${el.name}`}</Box>
                                                <Box fontSize='sm'>Cantidad:{` ${el.quantity}`}</Box>
                                            </div>
                                        )
                                    })}</Box>
                                    {/* <Box>{e._id}</Box> */}
                                    <Box fontSize='sm'>Precio:{`$/ ${e.sumaTotal}`}</Box>
                                </div>
                            )
                        })}

                    </chakra.p>

                    <Flex justifyContent="end" mt={4}>
                        <Box fontSize="xl" color="#ff66c4" _dark={{ color: "brand.300" }}>
                            {(activo === true) ? 'Estado: Activo' : 'Estado: Inactivo'}
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        
    );
}

export default UserCard





