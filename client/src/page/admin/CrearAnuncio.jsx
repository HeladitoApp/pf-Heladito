import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import {
  Divider,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Button,
  chakra,
  Textarea,
  Link,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Image
} from "@chakra-ui/react";
import { sendEmail } from '../../redux/actions/sendEmail';
import modelo from '../../assets/modelo-anuncio.png';
//import { Link } from 'react-router-dom';
//import UsuariosRegistradosAdmin from '../../componentes/UsuariosRegistradosAdmin/UsuariosRegistradosAdmin';

function control(input) {
    let error = {}
    if (input.titulo === '') {
        error.titulo = 'Por favor, ingrese un título'
    } else if (input.name === '') {
        error.name = 'Por favor, ingrese un nombre para el anuncio'
    } else if (input.info === '') {
        error.info = 'Por favor, ingrese la información del anuncio'
    } else if (input.img === '') {
        error.img = 'Por favor, ingrese la url de la imagen para elprodcto'
    } 
    return error
}

const CrearAnuncio = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.state.loading)

  const [input, setInput] = useState({
    titulo: '',
    name: '',
    info: '',
    img: '',
  });

  console.log([input, setInput])

  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(control({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (!input.errors &&
      input.titulo &&
      input.name &&
      input.info &&
      input.img) {
      dispatch(sendEmail(input))
      setInput({
        titulo: '',
        name: '',
        info: '',
        img: '',
      })
      swal({
        title: 'Su anuncio fue creado  y enviado correctamente a todos sus usuarios!',
        icon: "success",
        button: "aceptar"
      })
      navigate("/")
    } else {
      swal({
        title: 'Porfavor, verifique que todas las secciones estén completas',
        icon: "info",
        button: "aceptar"
      })
    }
  }


  if (loading) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Box
            bg="#E9FBFC"
            _dark={{
              bg: "#111",
            }}
            p={10}
          >
            <Box>
              <SimpleGrid
                display={{
                  base: "initial",
                  md: "grid",
                }}
                columns={{
                  md: 3,
                }}
                spacing={{
                  md: 6,
                }}
              >

              </SimpleGrid>

              <Box mt={[10, 0]}>
                <SimpleGrid
                  display={{ base: "initial", md: "grid" }}
                  columns={{ md: 3 }}
                  spacing={{ md: 6 }}
                >
                  <GridItem colSpan={{ md: 1 }}>
                    <Box px={[4, 0]}>
                      <Heading color='#ff66c4' fontSize="lg" fontWeight="medium" lineHeight="6">
                        Email de anuncios
                      </Heading>
                      <Text
                        mt={1}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                      >
                        Apartado para la creación de email de anuncios que llegará a todos los usuarios registrados en HeladitosApp. Para la creación de un óptimo anuncio, debes llenar todos los campos requeridos.
                      </Text>
                      <Image src={modelo} alt='No hay modelo por el momento' m='3' />
                    </Box>
                  </GridItem>

                  <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                    <chakra.form
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
                          <FormControl as={GridItem} colSpan={[6]}>
                            <FormLabel
                              htmlFor="titulo"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{ color: "gray.50" }}
                            >
                              Título del anuncio
                            </FormLabel>
                            <Input
                              type="text"
                              name="titulo"
                              id="titulo"
                              value={input.titulo}
                              onChange={handleInputChange}
                              autoComplete="given-titulo"
                              mt={1}
                              focusBorderColor="brand.400"
                              shadow="sm"
                              size="sm"
                              w="full"
                              rounded="md"
                              className='error'
                            />
                            {errors.titulo && (<p className="error">{errors.titulo}</p>)}
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6]}>
                            <FormLabel
                              htmlFor="name"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{ color: "gray.50" }}
                            >
                              Te presentamos:
                            </FormLabel>
                            <Input
                              type="text"
                              name="name"
                              id="name"
                              placeholder='nombre del anuncio o del producto'
                              value={input.name}
                              onChange={handleInputChange}
                              autoComplete="family-name"
                              mt={1}
                              focusBorderColor="brand.400"
                              shadow="sm"
                              size="sm"
                              w="full"
                              rounded="md"
                              className='error'
                            />
                             {errors.name && (<p className="error">{errors.name}</p>)}
                          </FormControl>

                          <FormControl as={GridItem} colSpan={6}>
                            <FormLabel
                              htmlFor="info"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{ color: "gray.50" }}
                            >
                              Descripción del anuncio o producto
                            </FormLabel>

                            <Textarea
                              name='info'
                              value={input.info}
                              onChange={handleInputChange}
                              //placeholder='Mensaje'
                              size='sm'
                              className='error'
                            />
                            {errors.info && (<p className="error">{errors.info}</p>)}
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{ color: "gray.50" }}
                            >
                              Imagen del anuncio o producto
                            </FormLabel>
                            <InputGroup size="sm">
                              <InputLeftAddon
                                bg="gray.50"
                                _dark={{ bg: "gray.800" }}
                                color="gray.500"
                                rounded="md"
                                className="error"                          >
                                http://
                              </InputLeftAddon>
                              <Input
                                type="url"
                                value={input.img}
                                name='img'
                                onChange={handleInputChange}
                                placeholder="www.example.com"
                                focusBorderColor="#5CE1E6"
                                rounded="md"
                                className="error"
                              />
                            </InputGroup>
                            {errors.img && (<p className="error">{errors.img}</p>)}
                            <FormHelperText>
                              Ingrese la URL de la imagen.
                            </FormHelperText>
                          </FormControl>

                        </SimpleGrid>
                      </Stack>
                      <Box
                        px={{ base: 4, sm: 6 }}
                        py={3}
                        bg="#FFF5E5"
                        _dark={{ bg: "#121212" }}
                        textAlign="right"
                      >
                        <Button
                          /* type="submit" */
                          color='#ff66c4'
                          bg='#FFF5E5'
                          onClick={e => handleClick(e)}
                        >
                          Enviar
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
              <Link href='/admin'><Button
                //   borderRadius={'full'} 
                colorScheme='pink' variant='solid' /* bg="rosado.normal" */>
                Ir al inicio
              </Button></Link>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default CrearAnuncio