import swal from 'sweetalert';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    GridItem,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    chakra,
    Divider,
  } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsuario } from '../../redux/actions/updateUsuario';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../loading/loading';
import { useParams } from "react-router"
import { traerUsuariosById } from '../../redux/actions/getUsuarioById'

export default function ActualizarUsuario() {
    const {id} = useParams()
    const loading = useSelector((state) => state.state.loading)
    const usuario = useSelector((state) => state.state.usuarios[0])
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        _id: id,
        name: null,
        password: null, 
        rol: null, 
        mail: null,
        activo: true
    })

    useEffect(()=>{
      dispatch(traerUsuariosById(id))
      dispatch(setLoading(true));
      setTimeout(() => {
          dispatch(setLoading(false));
      }, 1500);
  },[dispatch]);

    function handleInputsChange(e) {
          setInput({
            ...input,
            [e.target.name]: e.target.value
          })
        }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateUsuario(input))
          swal({
              title:'Usuario actualizado con exito!',
              icon:"success",
              button: "aceptar"
          })
                setInput({
                    name: null,
                    password: null, 
                    rol: null, 
                    mail: null,
                    activo: null
                })
            }

    if(loading){
      return(
          <Loading/>
      )
  }
    else{
    return (
      <Box bg="#EBFBFC" _dark={{ bg: "#111" }} p={10}>
          <Divider
          my="5"
          borderColor="gray.300"
          _dark={{ borderColor: "whiteAlpha.300" }}
          visibility={{ base: "hidden", sm: "visible" }}
          />
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Actualizar usuario
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                Actualice los campos deseados.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              onSubmit={e => handleSubmit(e)}
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg="white"
              _dark={{ bg: "#141517" }}
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Nombre
                  </FormLabel>
                  <Input
                    type="text" 
                    // value={input.name} 
                    name='name'
                    defaultValue = {usuario?.name}
                    onChange={(e) => handleInputsChange(e)}
                    id="nombre"
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error"
                  />
                </FormControl>
    
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Password
                  </FormLabel>
                  <Input
                    type="password" 
                    name='password'
                    defaultValue = {usuario?.password}
                    onChange={(e) => handleInputsChange(e)}
                    id="password"
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="price"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Email
                  </FormLabel>
                  <Input
                    type="text" 
                    // value={input.name} 
                    name='mail'
                    defaultValue = {usuario?.mail}
                    onChange={(e) => handleInputsChange(e)}
                    id="mail"
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error"
                  />
                </FormControl>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Estado de la cuenta
                  </FormLabel>
                  <Select
                    name='activo'
                    id="activo"  
                    defaultValue={"plaseholder"} 
                    onChange = {e => handleInputsChange(e)}
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error">
                    <option hidden value= 'plaseholder'>Estado</option>
                    <option value = {true} >Activo</option>
                    <option value = {false}>Inactivo</option>
                    
                  </Select>
                </FormControl>
    
                {/* <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Rol
                  </FormLabel>
                  <Input
                    type="text" 
                    name='rol'
                    defaultValue = {usuario?.rol}
                    onChange={(e) => handleInputsChange(e)}
                    id="rol"
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error"
                  />
                </FormControl> */}
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    Rol
                  </FormLabel>
                  <Select
                    name='rol'
                    id="rol"  
                    defaultValue={usuario?.rol} 
                    onChange = {e => handleInputsChange(e)}
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error">
                    <option value = 'cliente' >Cliente</option>
                    <option value = 'admin'>Admin</option>
                    
                  </Select>
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box
              px={{ base: 4, sm: 6 }}
              py={3}
              bg="gray.50"
              _dark={{ bg: "#121212" }}
              textAlign="right"
            >
              <Button
                borderRadius={'full'} 
                variant='solid'
                type="submit"
                colorScheme="blue"
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                ACTUALIZAR USUARIO!
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>

    <Divider
      my="5"
      borderColor="gray.300"
      _dark={{ borderColor: "whiteAlpha.300" }}
      visibility={{ base: "hidden", sm: "visible" }}
    />
    <Button
          borderRadius={'full'} 
          colorScheme='pink' variant='solid'>
              <a  href='/'>volver</a>
          </Button>
    </Box>
  );
};
}