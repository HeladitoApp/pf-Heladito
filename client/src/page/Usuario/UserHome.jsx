import React from 'react';
import {
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Icon,
  Avatar,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { updateUsuario } from '../../redux/actions/updateUsuario';
import { useDispatch, useSelector } from 'react-redux';

const UserHome = () => {
  const { logout } = useAuth0()
  const dispatch = useDispatch();
  const usuariosss = useSelector((state) => state.state.usuario[0]);
  let email = usuariosss?.email;
  console.log(usuariosss.email);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }
  const handleBaja = () => {
    dispatch(updateUsuario({ email: email, activo: false}))
    logout({ returnTo: window.location.origin })
  }
  const Card = ({ heading, detail }) => {
    return (
      <Stack
        /*  as={Link}
         href="#" */
        direction="column"
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )
        }}
        bg={useColorModeValue('rosado.claro', 'rosado.muy_claro')}
        p={3}
        rounded="lg"
        spacing={1}
        minW="20rem"
        h="max-content"
        style={{ textDecoration: 'none' }}
      >

        <Text fontSize="md" fontWeight="semibold">
          {heading}
        </Text>
        <Text fontSize="sm" textAlign="left" color="gray.500" lineHeight={1.3} noOfLines={2}>
          {detail}
        </Text>
      </Stack>
    );
  };

  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} bg="amarillo.muy_claro">
      <Stack direction={{ base: 'column', md: 'row' }} spacing={2} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="60rem"
          mb={{ base: 3, md: 0 }}
          mr="2rem"
        >
          <HStack justifyContent="flex start" alignItems="center">
            <Avatar
              boxShadow="xl"
              size="xl"
              src={usuariosss?.picture}
            />
            <Text fontSize="lg" pl="1rem" fontWeight="semibold">{usuariosss?.name}</Text>
          </HStack>
          <Heading
            textAlign={{ base: 'center', sm: 'left' }}
            margin="0 auto"
            width={{ base: '23rem', sm: 'auto' }}
            fontSize={{ base: '2.5rem', sm: '3rem' }}
          >
            Bienvenido
            <br /> de nuevo a <br /> HeladitosApp!
          </Heading>
          <Text textAlign="center">Nos apasiona el helado y el buen servicio, como a vos.</Text>
          <HStack
            display="flex"
            justifyContent="flex-start"
            spacing="1rem"
          >
            <Button
              variant="ghost"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              minW="9rem"
              bg="celeste.claro"
              value={false}
              onClick={e => handleBaja(e)}
            >
              Dar de baja esta cuenta
            </Button>
            <Button
              // rightIcon={<GoChevronRight />}
              // colorScheme="blue"
              variant="ghost"
              //size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              minW="9rem"
              bg="celeste.claro"
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          </HStack>
        </Stack>
        <VStack
          spacing={{ base: 5, sm: 4 }}
          direction={{ base: 'column', sm: 'row' }}
          alignItems="center"
          maxW="20rem"
          mx="2rem"
          display="flex"
          justifyContent="center"
        >
          <Link to={'/login/user/favoritos'}>
            <Card
              heading="Mis favoritos"
              detail="Guarda los Heladitos que más te gustan para más tarde."
            />
          </Link>
          <Link to={'/login/user/historial_de_pedidos'}>
            <Card
              heading="Historial de pedidos"
              detail="Accedé a tus últimas compras y sus detalles." />
          </Link>
          <Link to={'/login/user/mi_informacion'}>
            <Card
              heading="Mi información"
              detail="Actualizá tu información personal para no perderte las últimas novedades!" />
          </Link>
        </VStack>
      </Stack>
    </Container>
  )
}

export default UserHome
