import { useAuth0 } from '@auth0/auth0-react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Icon, Link, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritosByEmail } from '../../redux/actions/getFavoritosByEmail';
import FavCard from './favCard';

const FavoritosCliente = () => {
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const favoritos = useSelector(state => state.state.favoritos) /* Hay que crear el estado */
    console.log(favoritos);
    useEffect(() => {
        dispatch(getFavoritosByEmail(user.email)) /* Hay que hacer la action */
    }, [dispatch, user.email])
  
    return (
    <Stack p={10} ml="1rem">
        <Heading color={'rosado.normal'} pb={4} textAlign={'center'}>Favoritos <Icon as={FaHeart} /></Heading>
        
        <Box p={5} border={'1px'} borderColor={'gray.200'} borderRadius={'20px'} mx="10rem" w="full">
            <Flex 
            flexWrap={"wrap"}
            justifyContent="center" 
            align="center" 
            direction="row"
            >
            {
                favoritos.map((f, i) =>{
                    return (                        
                        <FavCard f={f}/>
                    )
                })
            }
            </Flex>
        </Box>

        <Link href="/login/user/" style={{ textDecoration: 'none'}}>
            <Button bg='rosado.normal' mx="1rem" mb="1rem" mt="0.5rem" leftIcon={<ArrowBackIcon />}>
                Volver
            </Button>
        </Link>
    </Stack>
  )
}

export default FavoritosCliente;
