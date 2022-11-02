import { chakra, Badge, Box, Button, Flex, Image, SimpleGrid, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import success from '../../assets/helado_succes.png';

const PaymentSuccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const compra_id = urlParams.get('compra_id');

  useEffect(() => {
    onOpen()

  }, [onOpen])

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
      bg="verde.letras"
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
          color="green"
          _dark={{
            color: "gray.300",
          }}
          lineHeight="shorter"
        >
          Tu pago fue procesado de manera correcta. En breves estaremos preparando tu pedido.
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
          Gracias por elegirnos como tus Heladitos de confianza. Mientras esperas tu pedido te invitamos a participar en nuestra sección de feedback, queremos saber un poco más acerca de tu experiencia en HeladitosApp, solo te llevará unos minutos y nos ayudará a mejorar día a día.
        </chakra.p>
        <chakra.form w="full" mb={0} display="flex" alignItems="center" justifyContent="space-between" pt="2rem" >
          {/* size="lg"
            w="full"
            display={{
              base: "none",
              lg: "flex",
            }} */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              color="white"
              variant="solid"
              colorScheme="rosado.normal"
              size="lg"
              bg="rosado.original"
              w="9rem"
              leftIcon={<ArrowBackIcon />}
            >
              Ir al inicio
            </Button>
          </Link>
          <Link href="/payment/feedback" style={{ textDecoration: 'none' }}>
            <Button
              color="white"
              variant="solid"
              colorScheme="rosado.normal"
              size="lg"
              bg="rosado.original"
              w="10rem"
              rightIcon={<ArrowForwardIcon />}
            >
              Claro que si!
            </Button>
          </Link>
          <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent bg={'verde.letras'}>
              <ModalHeader>¡Pago exitoso!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                ¿Desea generar un comprobante de pago?
              </ModalBody>
              <ModalFooter>
                <Button
                  mr={15}
                  onClick={onClose}
                  color="white"
                  variant="solid"
                  bg="rosado.original"
                  colorScheme="rosado.normal">
                  No, Gracias
                </Button>
                <a href={`${process.env.REACT_APP_SERVER_URL}/GeneraComprobante?compra_id=${compra_id}`} rel="noopener" target="_blank">
                  <Button
                    onClick={onClose}
                    color="white"
                    variant="solid"
                    colorScheme="rosado.normal"
                    bg="rosado.original"

                    ml={20} >
                    Si!, Por favor</Button>
                </a>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </chakra.form>
      </Flex>
      <Box>
        <Image
          src={success}
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
    </SimpleGrid >
  )
}

export default PaymentSuccess;
