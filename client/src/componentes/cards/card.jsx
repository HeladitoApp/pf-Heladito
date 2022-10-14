import React from "react";
import { Box, Flex, Image, Link, chakra, Badge, Center, Heading, Text, Button } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
export default function Card({ id, img, name, price }) {

    return (
        <Box
            py={4}
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
                <Heading fontFamily={'family.heading'} as='h4' size='md' > {name}</Heading>
                {/* <Badge variant={'solid'} colorScheme='green' rounded={'full'} px='2'>
                    New
                </Badge> */}
                <Text p={5} fontFamily={'family.body'} fontSize='2xl'>Precio $/{price}</Text>
                <Link as={ReachLink} to={`/product/${id}`} border={'1px'} borderColor={'teal'} borderRadius={'full'} px="70" py={"2"} _hover={{ bg: 'celeste.original' }}>
                    Seleccionar
                </Link>
            </Box>

        </Box >
    );
};

