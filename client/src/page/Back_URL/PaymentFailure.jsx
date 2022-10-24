import { chakra, Badge, Box, Button, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
      bg="amarillo.claro"
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{
          base: 4,
          lg: 20,
        }}
        py="3rem"
      >
        <Badge
          color="white"
          px={3}
          py={1}
          mb={3}
          variant="solid"
          colorScheme="brand"
          rounded="full"
        >
          Equipo de HeladitosApp
        </Badge>
        <chakra.h1
          mb={6}
          fontSize={{
            base: "3xl",
            md: "3xl",
            lg: "4xl",
          }}
          fontWeight="bold"
          color="brand.600"
          _dark={{
            color: "gray.300",
          }}
          lineHeight="shorter"
        >
          Ups! Hubo un problema procesando tu pago.
        </chakra.h1>
        <chakra.p
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          fontSize="sm"
          color="brand.600"
          _dark={{
            color: "gray.400",
          }}
          letterSpacing="wider"
        >
          Gracias por elegirnos como tus Heladitos de confianza. Por alguna razón no se pudo efectuar tu pago de manera correcta, por favor volvé a intentarlo nuevamente o contactate con Mercadopago para que puedan ayudarte a resolver este problema.
          Asimismo, te invitamos a participar en nuestra sección de feedback, queremos saber un poco más acerca de tu experiencia en HeladitosApp, solo te llevará unos minutos y nos ayudará a mejorar día a día.
        </chakra.p>
        <chakra.form w="full" mb={0} display="flex" alignItems="center" justifyContent="space-between" pt="2rem" >
            {/* size="lg"
            w="full"
            display={{
              base: "none",
              lg: "flex",
            }} */}      
              <Link to="/">
                <Button
                  color="white"
                  variant="solid"
                  colorScheme="celeste.normal"
                  size="lg"
                  bg="celeste.original"
                  w="9rem"
                  leftIcon={<ArrowBackIcon />}
                >
                  Ir al inicio
                </Button>
              </Link>
              <a href='https://www.mercadopago.com/'>
                <Button
                  color="white"
                  variant="solid"
                  colorScheme="celeste.normal"
                  size="lg"
                  bg="celeste.original"
                  w="10rem"
                  as="a"
                  target='_blank'
                  href='https://www.mercadopago.com/'
                >
                  Ir MercadoPago
                </Button>
              </a>
              <Link to="/payment/feedback">
                <Button
                  color="white"
                  variant="solid"
                  colorScheme="celeste.normal"
                  size="lg"
                  bg="celeste.original"
                  w="10rem"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Claro que si!
                </Button>
              </Link>
        </chakra.form>
      </Flex>
      <Box>
        <Image
          src="https://media.istockphoto.com/photos/pink-ice-cream-melting-and-spilling-from-the-waffle-cone-minimalistic-picture-id1362489449?k=20&m=1362489449&s=612x612&w=0&h=4sFw_QDl2FKrd9e8qQTiW3deP2I0kSMxMJBvl8hD1kc="
          alt="melting ice cream"
          fit="cover"
          w="full"
          h={{
            base: 64,
            md: "full",
          }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  )  
}

export default PaymentFailure;
