import React, { useEffect } from 'react';
import { Box, TableCaption, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import Message from '../../componentes/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInboxAdmin } from '../../redux/actions/getAllInboxAdmin';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import { clearDetails } from '../../redux/slices';

const AdminInbox = () => {
    const dispatch = useDispatch()
    const messages = useSelector(state => state.state.messages)
    console.log(messages)
    const loading = useSelector((state) => state.state.loading)

    useEffect(() => {
        dispatch(getAllInboxAdmin());
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
                        {/* <Heading textAlign={'center'} pb={4}>Bandeja de entrada</Heading> */}
                        <TableContainer p={5} border={'1px'} borderColor={'gray.200'} borderRadius={'2em'} bg='white'>
                            <Table variant='striped' colorScheme='pink' >
                            <TableCaption>Bandeja de entrada HeladitosApp</TableCaption>
                                <Thead color={'red'} h={'50px'} >
                                    <Tr color={'red'}>
                                        <Th>Cliente</Th>
                                        <Th>Mensajes</Th>
                                        <Th>Recibido</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {messages?.map(message => (
                                        <Message
                                            name={message.name}
                                            lastname={message.lastname}
                                            email={message.email}
                                            message={message.message}
                                            contact={message.contact}
                                            createdAt={message.createdAt}
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

export default AdminInbox

