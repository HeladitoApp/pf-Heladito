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
  Image,
  Link
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../componentes/loading/loading';
import { useAuth0 } from '@auth0/auth0-react';
import { updateUsuario } from '../../redux/actions/updateUsuario';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Informacion() {
  const dispatch = useDispatch()
  const usuario = useSelector((state) => state.state.usuario[0])

  const { user, isLoading } = useAuth0();

  const [input, setInput] = useState({
    name: user?.name,
    email: user?.email,
    picture: user?.picture,
    apodo: user?.apodo,
  })

  function handleInputsChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUsuario(input));
    swal({
      title: 'Información actualizada con exito!',
      icon: "success",
      button: "Aceptar"
    });
    setInput({
      name: user?.name,
      email: user?.email,
      picture: user?.picture,
      apodo: user?.apodo,
    });
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
        <Box mx={{ base: 0, md: 60 }} transition=".3s ease">
          <Box as="main" px="10">
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
                      <Heading fontSize="2xl" fontWeight="medium" lineHeight="6">
                        Mi información 
                      </Heading>
                      <Text
                        mt={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        Aquí encontrarás tu información personal.
                        Para modificarla, completá todos los campos y dale click en "Guardar"
                      </Text>
                      <Image src={usuario?.picture} p='1.5rem' minW="15rem"/>
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
                              // value={usuario?.name} 
                              name='name'
                              defaultValue={usuario?.name}
                              onChange={(e) => handleInputsChange(e)}
                              id="name"
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
                              Nickname
                            </FormLabel>
                            <Input
                              type="text"
                              // value={usuario?.apodo} 
                              name='apodo'
                              defaultValue={usuario?.apodo}
                              onChange={(e) => handleInputsChange(e)}
                              id="name"
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
                              Email
                            </FormLabel>
                            <Input
                              type="text"
                              // value={usuario?.email} 
                              name='email'
                              defaultValue={usuario?.email}
                              onChange={(e) => handleInputsChange(e)}
                              id="name"
                              mt={1}
                              focusBorderColor="#5CE1E6"
                              shadow="sm"
                              size="sm"
                              w="full"
                              rounded="md"
                              className="error"
                            />
                          </FormControl>                    

                          <FormControl as={GridItem} colSpan={[6, 4]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{ color: "gray.50" }}
                            >
                              Imagen de perfil
                            </FormLabel>
                            <InputGroup size="sm">
                              <InputLeftAddon
                                bg="gray.50"
                                _dark={{ bg: "gray.800" }}
                                color="gray.500"
                                rounded="md"
                                className="error">
                                http://
                              </InputLeftAddon>
                              <Input
                                type="url"
                                // value={usuario?.picture}
                                defaultValue={usuario?.picture}
                                name='picture'
                                onChange={(e) => handleInputsChange(e)}
                                placeholder="www.example.com"
                                focusBorderColor="#5CE1E6"
                                rounded="md"
                                className="error"                            
                              />
                            </InputGroup>
                            <FormHelperText>
                              Ingrese la URL de la imagen.
                            </FormHelperText>
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
                          borderRadius="0.5rem"
                          variant='solid'
                          type="submit"
                          colorScheme="blue"
                          _focus={{ shadow: "" }}
                          fontWeight="md"
                        >
                          Guardar
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
            <Link href="/login/user/" style={{ textDecoration: 'none'}} /* pl={20} */>
                <Button bg='rosado.normal'  mb="1rem" mt="0.5rem" leftIcon={<ArrowBackIcon />}>
                    Volver
                </Button>
            </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
}