import React from 'react';
import {
    Box,
    Button,
    Td,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Divider,
    Spacer
} from "@chakra-ui/react";


const Message = ({ name, lastname, email, message, contact, createdAt }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <React.Fragment>
            <Tr>
                <Td>{name.concat(lastname)}</Td>
                <Td>
                    <>
                        <Button onClick={onOpen} bg='rosado.original' color='white'>Mensaje</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader color='rosado.original' fontWeight='semibold'>De: {name + lastname}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box display='flex'>
                                        <Box fontWeight='semibold'>{email} </Box>
                                        <Spacer />
                                        <Box fontWeight='semibold'>{new Date(createdAt).toDateString()} </Box>
                                    </Box>
                                    <Divider />
                                    <Box fontWeight='semibold'>Nº de Contacto: {contact}</Box>
                                    <Divider />
                                    {message}
                                </ModalBody>

                                <ModalFooter>
                                    <Button bg='celeste.original' color='white' mr={3} onClick={onClose}>
                                        Cerrar
                                    </Button>

                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </Td>
                <Td textAlign={'center'}>{new Date(createdAt).toDateString()}</Td>

            </Tr>
        </React.Fragment >
    )
}

export default Message