import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import TablaUsuarios from './TablaUsuarios';


const UsuariosRegistradosAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} w='10em' h='4em' textAlign='center' bg='amarillo.claro'>
                Usuarios Registrados <br /> (Últimos 7 días)
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='celeste.original'>Usuarios registrados en la última semana</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TablaUsuarios />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='rosado.original' bg='rosado.original' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UsuariosRegistradosAdmin
