import React from 'react';
import { Box, Stack, Flex, Image, HStack, Divider, VStack, Icon, Text, Link } from '@chakra-ui/react';
import logotipo from "../../assets/Logotipo tienda helados.png";
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import Mapa from "../map/map"

const Footer = () => {
  return (
    <div>
      <Box
        bg="rosado.muy_claro"
        _dark={{
        bg: "gray.600",
        }}
        >
          <Mapa/>
  <Stack
    direction={{
      base: "column",
      lg: "row",
    }}
    w="full"
    justify="space-between"
    p={10}
  >
    <Flex justify="center">
      <Image
        src={logotipo}
        alt="Company Logo"
        rounded="lg"
        width={{
          base: "150px",
          lg: "150px",
        }}
        height={{
          base: "150px",
          lg: "150px",
        }}
        my={{
          base: 2,
          lg: 0,
        }}
      />
    </Flex>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column">
        <Link textTransform="uppercase">Sobre nosotros</Link>
      </Flex>
    </HStack>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column">
        <Link textTransform="uppercase">Reseñas</Link>
      </Flex>
    </HStack>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column">
        <Link textTransform="uppercase">Contacto</Link>
      </Flex>
    </HStack>
  </Stack>
  <Divider
    w="95%"
    mx="auto"
    color="gray.600"
    _dark={{
      color: "#F9FAFB",
    }}
    h="3.5px"
  />
  <VStack py={3}>
    <HStack justify="center">
      <Text
        textAlign="center"
        fontSize="md"
        _dark={{
          color: "white",
        }}
      >
        Seguinos!
      </Text>
    </HStack>
    <HStack justify="center">
      <Link href='https://www.facebook.com/' isExternal>
        <Icon
          color="rosado.normal"
          _dark={{
            color: "white",
          }}
          h="30px"
          w="30px"
          as={FaFacebookSquare} 
        />
      </Link>
      {/* <Link>
        <Icon
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FiTwitter} Logo Twitter
        />
      </Link> */}
      <Link href='https://www.instagram.com/' isExternal>
        <Icon
          color="rosado.normal"
          _dark={{
            color: "white",
          }}
          h="30px"
          w="30px"
          as={FaInstagramSquare}
        />
      </Link>
      {/* <Link>
        <Icon
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaLinkedinIn}
        />
      </Link> */}
    </HStack>

    <Text
      textAlign="center"
      fontSize="smaller"
      _dark={{
        color: "white",
      }}
    >
      &copy;HeladitosApp. Todos los derechos reservados.
    </Text>
  </VStack>
</Box>;
    </div>
  )
}

export default Footer;
