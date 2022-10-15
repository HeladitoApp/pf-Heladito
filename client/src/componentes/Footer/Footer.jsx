import React from 'react';
import { Box, Stack, Flex, Image, HStack, Divider, VStack, Icon, Text, Link } from '@chakra-ui/react';
import logotipo from "../../assets/Logotipo tienda helados.png";


const Footer = () => {
  return (
    <div>
      <Box
        bg="white"
        _dark={{
        bg: "gray.600",
        }}
        >
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
        <Link textTransform="uppercase">Services</Link>
        <Link textTransform="uppercase">Theme Tweak</Link>
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
        <Link textTransform="uppercase">Show Case</Link>
        <Link textTransform="uppercase">Support</Link>
      </Flex>
      <Flex justify="start" direction="column">
        <Link textTransform="uppercase">About Us</Link>
        <Link textTransform="uppercase">Contact Us</Link>
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
      <Link>
        <Icon
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          /* as={FaFacebookF} Logo Facebook */
        />
      </Link>
      <Link>
        <Icon
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          /* as={FiTwitter} Logo Twitter */
        />
      </Link>
      <Link>
        <Icon
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          /* as={GrInstagram} Logo Instagram */
        />
      </Link>
      <Link>
        <Icon
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          /* as={FaLinkedinIn} Logo Linkedin */
        />
      </Link>
    </HStack>

    <Text
      textAlign="center"
      fontSize="smaller"
      _dark={{
        color: "white",
      }}
    >
      &copy;Copyright. All rights reserved.
    </Text>
  </VStack>
</Box>;
    </div>
  )
}

export default Footer;
