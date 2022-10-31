import React, { useEffect } from 'react';
import { Box, TableCaption, Table, TableContainer, Tbody, Th, Thead, Tr, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import { clearDetails } from '../../redux/slices';
import { getAllFeedbacks } from '../../redux/actions/getAllFeedbacks';
import Feedback from '../../componentes/Feedback';

const Feedbacks   = () => {
    const dispatch = useDispatch()
    const feedbacks = useSelector(state => state.state.feedbacks)
    console.log(feedbacks)
    const loading = useSelector((state) => state.state.loading)

    useEffect(() => {
        dispatch(getAllFeedbacks());
        dispatch(setLoading(true));
        window.scrollTo(0, 0);
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
        return () => {
            dispatch(clearDetails())
        }
    }, [dispatch])

    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box p='20'>
                        <TableContainer fontSize='xs' p={5} border={'1px'} borderColor={'gray.200'} borderRadius={'0.7em'} bg='white'>
                            <Table variant='striped' colorScheme='pink' size='xs'>
                                <TableCaption fontSize='xs'>Feedbacks - Experiencia de compra en HeladitosApp</TableCaption>
                                <Thead >
                                    <Tr>
                                        <Th>Clientes/nombre</Th>
                                        <Th>Feedbacks</Th>
                                        <Th>Recibido</Th>
                                    </Tr>
                                </Thead>
                                <Tbody >
                                    {feedbacks?.map(feedback => (
                                        <Feedback
                                            name={feedback.name}
                                            conformidad={feedback.conformidad}
                                            puntaje={feedback.puntaje}
                                            aspecto={feedback.aspecto}
                                            descripcion={feedback.descripcion}
                                            createdAt={feedback.createdAt}
                                        />
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default Feedbacks