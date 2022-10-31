import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from '../../redux/actions/getAllUsers';


const TablaUsuarios = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.state.usuarios);

    const dateUsers = users.map(e => e.update_at)
    console.log(dateUsers)

    /* for (let i = 0; i <= dateUsers.length; i++) {
      const result = formatDistanceStrict(
                new Date(),
                new Date(dateUsers[i]))
                if (result <= '3 days')
                console.log(result)
                return result
            } */
            

    /*
        const user = () => {
            if (result <= '3 days') return dateUsers */


    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>clientes</Th>
                        <Th>email</Th>
                        <Th>Fecha/ingreso</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        {/*  {user?.map(u => (  
                            <Td>{u.name}</Td>
                            <Td>{u.email}</Td>
                            <Td>{u.Date}</Td>
                        )
                        )} */}
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>clientes</Th>
                        <Th>email</Th>
                        <Th>Fecha/ingreso</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default TablaUsuarios