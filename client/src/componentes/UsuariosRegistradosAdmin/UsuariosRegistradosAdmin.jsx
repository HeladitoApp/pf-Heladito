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


const UsuariosRegistradosAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} w='10em' h='4em' textAlign='center' bg='amarillo.claro'>
                Usuarios Registrados <br/> (Últimos 5 días)
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Últimos usuarios registrados</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere molestiae eaque tenetur asperiores pariatur numquam inventore obcaecati doloribus aperiam distinctio quasi quo voluptatibus rem laborum nobis, rerum dolores voluptatem.</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='rosado.original' bg='rosado.original' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UsuariosRegistradosAdmin
