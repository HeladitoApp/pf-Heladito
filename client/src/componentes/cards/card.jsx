import React from "react";
import { Box, Flex, Image, Link, chakra, Badge, Center, Heading, Text, Button } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function Card({ id, img, name, price, stock }) {
    const navigate = useNavigate()
    function verificarStock() {
        if (stock) {
            navigate(`/product/${id}`)
        } else {
            swal({
                title: 'Producto agotado',
                icon: "info",
                button: "aceptar"
            })
        }
    }

    return (
        <Link onClick={() => verificarStock()}
            style={{ textDecoration: 'none', paddingLeft: 2, paddingRight: 2 }} >
            <Box
                py={4}
                h="450px"
                w="280px"
                mt="30px"
                border='1px'
                borderColor='rosado.normal'
                boxShadow='2xl'
                rounded="30px"
                overflow="hidden"
                mx="auto"
                _hover={{ bg: 'rosado.muy_claro', transform: 'scale(1.05)' }}
            >
                <Image
                    m="10px"
                    h={56}
                    src={img}
                    alt="avatar"
                    mx="auto"
                />
                <Box p="4" align="center">
                    <Heading fontFamily={'family.heading'} as='h4' size='md' h="4rem"> {name}</Heading>
                    {/* <Badge variant={'solid'} colorScheme='green' rounded={'full'} px='2'>
                    New
                </Badge> */}
                    <Text p={4} fontFamily={'family.body'} fontSize='2xl'>Precio $/{price}</Text>
                    {!stock && <Badge variant={'solid'} colorScheme='yellow' rounded={'full'} px='2'> Producto agotado</Badge>}
                </Box>
            </Box >
        </Link>
    );
};

