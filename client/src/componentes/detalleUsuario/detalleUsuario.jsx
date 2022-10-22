import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    position
    } from '@chakra-ui/react'
    import { Link } from "react-router-dom";
import { Box, Flex, Image, chakra, Badge, Center, Heading, Text, Button, useDisclosure, Lorem} from "@chakra-ui/react";

export default function DetalleUsuario({_id, mail, name, activo, rol, compras}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let estado = activo === true? 'Activa' : 'Inactiva'
    let productosComprados = []
    for (let i = 0; i < compras.length; i++) {
        let productos = compras[i].productos
        for (let i = 0; i < productos?.length; i++) {
            let producto = productos[i].name
                productosComprados.push(producto)
            }
        }
    return (
        <>
        <Button position = 'relative' margin= '5px' left = '74px' onClick={onOpen} _hover={{ bg: 'rosado.muy_claro', transform: 'scale(1.05)' }} >Mas detalles</Button>
        <Button position = 'relative' margin= '5px' left = '52px' _hover={{ bg: 'rosado.muy_claro', transform: 'scale(1.05)' }}><Link to={`/admin/update/${_id}`}>Editar informacion</Link></Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text fontWeight='bold' mb='1rem'>
                Mail: {mail}
                </Text>
                <Text fontWeight='bold' mb='1rem'>
                Estado de la cuente: {estado}
                </Text>
                <Text fontWeight='bold' mb='1rem'>
                Rol en la pagina: {rol}
                </Text>
                <Text fontWeight='bold' mb='1rem'>
                Compras: {productosComprados?.length === 0? 'El usuario aun no ha comprado nada' : productosComprados?.map(el => el).join(', ')}
                </Text>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cerrar
                </Button>
                <Button><Link to={`/admin/update/${_id}`}>Editar informacion</Link></Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
    )
}