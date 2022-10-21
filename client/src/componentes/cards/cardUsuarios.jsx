import React from "react";
import { Box, Flex, Image, Link, chakra, Badge, Center, Heading, Text, Button, useDisclosure} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom";
import DetalleUsuario from "../detalleUsuario/detalleUsuario";

export default function CardUsuarios({ _id, mail, name, activo, rol, compras}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // let productosComprados = []
    // for (let i = 0; i < compras.length; i++) {
    //     let productos = compras[i].productos
    //     for (let i = 0; i < productos.length; i++) {
    //         let producto = productos[i].name
    //             productosComprados.push(producto)
    //         }
    //     }
    let estado = activo === true? 'Cuenta activa' : 'Cuenta inactiva'

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
    // _hover={{ bg: 'rosado.muy_claro', transform: 'scale(1.05)' }}
    >
        <div>
        {
          <DetalleUsuario
          _id={_id}
          name = {name}
          mail = {mail}
          activo = {activo}
          rol = {rol}
          compras = {compras}
          />
        }
        </div>
          {/* <Image
              m="10px"
              h={56}
              src={img}
              alt="avatar"
              mx="auto"
          /> */}
          <Box p="4" align="center">
            <Heading fontFamily={'family.heading'} as='h4' size='md' h="4rem"> {name}</Heading>
            <Text p={5} fontFamily={'family.body'} fontSize='2xl'>{mail}</Text>
            <Text p={5} fontFamily={'family.body'} fontSize='2xl'>{rol.toUpperCase()}</Text>
            <Text p={5} fontFamily={'family.body'} fontSize='2xl'>{estado}</Text>
            {/* <Text p={5} fontFamily={'family.body'} fontSize='2xl'>{productosComprados?.map(el => el).join(', ')}</Text> */}
        </Box>
      </Box >
  );
      }

