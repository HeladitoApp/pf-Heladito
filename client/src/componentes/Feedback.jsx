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


const Feedback = ({ email, conformidad, puntaje, aspecto, descripcion, createdAt }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <React.Fragment>
            <Tr>
                <Td>{email}</Td>
                <Td>
                    <>
                        <Button size='xs' onClick={onOpen} bg='rosado.original' color='white'>Feedback</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader color='rosado.original' fontWeight='semibold'>Feedback de: {email} </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box display='flex'>
                                        <Spacer />
                                        <Box fontWeight='semibold'>{new Date(createdAt).toDateString()} </Box>
                                    </Box>
                                    <Divider />
                                    <Box>{conformidad} pude conseguir los productos que buscaba.</Box>
                                    <Divider />
                                    <Box>Puntuaría mi experiencia general en HeladitosApp con un {puntaje}.</Box>
                                    <Divider />
                                    <Box>El aspecto que más valoro es: {aspecto}</Box>
                                    <Divider />
                                    <Box>Comentario: {descripcion}</Box>
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

export default Feedback