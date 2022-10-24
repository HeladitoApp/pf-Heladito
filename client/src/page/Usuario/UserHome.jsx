import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ComprasCliente from '../../componentes/comprasCliente/comprasCliente'

const UserHome = () => {
  return (
    <Box p={20} pt={5}>
      <Heading p={2} textAlign={'center'}> UserHome</Heading>
      <ComprasCliente />
    </Box>
  )
}

export default UserHome