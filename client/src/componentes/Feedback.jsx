import React from 'react';
import swal from 'sweetalert';
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
import { updateFeedback } from '../redux/actions/updateFeedback';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const Feedback = ({ name, conformidad, puntaje, aspecto, descripcion, createdAt }) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        aprobado: null
    })
    console.log(input)

    function handleClick(e) {
        e.preventDefault();
        setInput({
            ...input,
            aprobado: true,
        })
        dispatch(updateFeedback(input))
        setInput({
            aprobado: null
        })
        swal({
            title:'Feedback actualizado!',
            icon:"success",
            button: "aceptar"
        })
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <React.Fragment>
            <Tr>
                <Td>{name}</Td>
                <Td>
                    <>
                        <Button size='xs' onClick={onOpen} bg='rosado.original' color='white'>Feedback</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader color='rosado.original' fontWeight='semibold'>Feedback de: {name} </ModalHeader>
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
                                    <Button variant='ghost' mr={3} color='celeste.original' onClick={handleClick}>Aprovar feedback (reseñas)</Button>
                                    {/* <Button variant='ghost' mr={3} color='celeste.original' onClick={handleClick}>Enviar reseña</Button> */}
                                    <Button bg='celeste.original' color='white' onClick={onClose}>
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