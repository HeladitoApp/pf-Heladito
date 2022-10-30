import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';

import {
  WrapItem,
  Wrap,
  Center,
  Box,
  Link,

} from "@chakra-ui/react";
import { sendEmail } from '../../redux/actions/sendEmail';
//import { Link } from 'react-router-dom';
//import UsuariosRegistradosAdmin from '../../componentes/UsuariosRegistradosAdmin/UsuariosRegistradosAdmin';

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
                <Center w='210px' h='100px' bg='#FFE6C1' cursor="pointer" alignContent='stretch'>
                  {/* <UsuariosRegistradosAdmin /> */}
                </Center>
              </WrapItem>
            </Link>
            <WrapItem>
              <Center w='210px' h='100px' bg='#FFC6E9' cursor="pointer">
                Equipo Admin
              </Center>
            </WrapItem>

          </Wrap>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminHome