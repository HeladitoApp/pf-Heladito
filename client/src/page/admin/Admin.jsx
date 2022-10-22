import { useAuth0 } from '@auth0/auth0-react'
import { Box, Center, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import AgregarProducto2 from '../../componentes/addProducto/addProducto'
import LoginActionButton from '../../componentes/Login/LoginActionButton'
import { getPrivateAccess, getPrivateAccessVip, getPublicAccess } from '../../services/getResponses'
import Login from '../login/Login'
import SearchUsuario from '../../componentes/buscarUsuario/buscarUsuario'

const Admin = () => {
    const [message, setMessage] = useState('');
    const { getAccessTokenSilently } = useAuth0();

    const getPublicResponse = async () => {
        const { data, error } = await getPublicAccess()
        if (data) setMessage(JSON.stringify(data, null, 2))
        if (error) setMessage(JSON.stringify(error, null, 2))
    }

    const getPrivateResponse = async () => {
        const token = await getAccessTokenSilently();
        const { data, error } = await getPrivateAccess(token)
        if (data) setMessage(JSON.stringify(data, null, 2))
        if (error) setMessage(JSON.stringify(error, null, 2))
    }

    const getVipResponse = async () => {
        const token = await getAccessTokenSilently();
        const { data, error } = await getPrivateAccessVip(token)
        if (data) setMessage(JSON.stringify(data, null, 2))
        if (error) setMessage(JSON.stringify(error, null, 2))
    }

    return (
        // <AgregarProducto2 />
        // <Login />
        <>
            <Center m={5} >
                <VStack>
                    <HStack m={5}>
                        <LoginActionButton name={'Get Public Resposta'} onClick={getPublicResponse} color={'brandTerciario'} />
                        <LoginActionButton name={'Get Private Resposta'} onClick={getPrivateResponse} color={'brandSecundario'} />
                        <LoginActionButton name={'Get VIP Resposta'} onClick={getVipResponse} color={'brandPrincipal'} />
                        <SearchUsuario/>
                    </HStack>
                    <Box bg={'amarillo.muy_claro'} m={5}>
                        <pre>{message}</pre>
                    </Box>
                </VStack>
            </Center>
            <AgregarProducto2 />
        </>
    )
}

export default Admin