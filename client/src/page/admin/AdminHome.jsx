import React from 'react'
import { Box, Center, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="10">
          <Wrap spacing='30px' justify='center'>
            <Link>
              <WrapItem>
                <Center w='210px' h='100px' bg='red.200' cursor="pointer">
                  Nuevas Compras
                </Center>
              </WrapItem>
            </Link>
            <Link>
              <WrapItem>
                <Center w='210px' h='100px' bg='#99ECEF' cursor="pointer">
                  Compras en proceso
                </Center>
              </WrapItem>
            </Link>
            <Link>
              <WrapItem>
                <Center w='210px' h='100px' bg='#FFE6C1' cursor="pointer">
                  Usuarios Registrados (24H)
                </Center>
              </WrapItem>
            </Link>
            <WrapItem>
              <Center w='210px' h='100px' bg='#FFC6E9'cursor="pointer">
                Equipo Admin
              </Center>
            </WrapItem>
            {/*  <WrapItem>
              <Center w='180px' h='80px' bg='blackAlpha.500'>
                Box 5
              </Center>
            </WrapItem> */}
          </Wrap>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminHome