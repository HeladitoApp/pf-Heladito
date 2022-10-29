import {
  chakra, Box, Button, FormControl, FormLabel, GridItem, Heading, Select, SimpleGrid, Stack, Text, Divider, Textarea, Link,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import { addFeedback } from '../../redux/actions/addFeedback';


function control(value) {
  let error = {}
  if (value.conformidad === '') {
    error.conformidad = 'Por favor, selecciona una respuesta'
  } else if (value.puntaje === '') {
    error.puntaje = 'Por favor, selecciona una respuesta'
  } else if (value.aspecto === '') {
    error.aspecto = 'Por favor, selecciona una respuesta'
  } else if (value.descripcion === '') {
    error.descripcion = 'Por favor, déjanos un breve comentario'
  }
  return error
}

const PaymentFeedback = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.state.loading)

  const [value, setValue] = useState({
    conformidad: '',
    puntaje: '',
    aspecto: '',
    descripcion: '',
  });

  console.log([value, setValue])

  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  const handleSelect = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    setErrors(control({
      ...value,
      [e.target.name]: e.target.value
    }))
  }



  const handleInputChange = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    setErrors(control({
      ...value,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (!value.errors &&
      value.conformidad &&
      value.puntaje &&
      value.aspecto &&
      value.descripcion) {
      dispatch(addFeedback(value))
      setValue({
        conformidad: '',
        puntaje: '',
        aspecto: '',
        descripcion: '',
      })
      swal({
        title: 'Su feedback fue enviado correctamente. Muchas gracias por su tiempo!',
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
                <Heading fontSize="lg" color='rosado.original' fontWeight="medium" lineHeight="6">
                  Formulario de feedback
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  Muchas gracias por darnos tu opinión. En HeladitosApp queremos que cada cliente tenga una experiencia única, y eso lo hacemos escuchandoté. Te esperamos la próxima!
                </Text>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <chakra.form
                // onSubmit={e => handleSubmit(e)}
                //method="POST"
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
                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        ¿Pudiste conseguir los productos que buscabas?
                      </FormLabel>
                      <Select
                        id="conformidad"
                        defaultValue={'plaseholder'}
                        mt={1}
                        focusBorderColor="#5CE1E6"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        className="error"
                        name="conformidad"
                        value={value.conformidad}
                        onChange={handleSelect}
                      >
                        <option hidden value='placeholder'>Elige uno</option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                      </Select>
                      {errors.conformidad && (<p className="error">{errors.conformidad}</p>)}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        Del 1 al 5, ¿Cómo puntuarías tu experiencia general en HeladitosApp? Considerando 1 como una mala puntuación y 5 como excelente.
                      </FormLabel>
                      <Select
                        id="puntaje"
                        defaultValue={'plaseholder'}
                        mt={1}
                        focusBorderColor="#5CE1E6"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        className="error"
                        name="puntaje"
                        value={value.puntaje}
                        onChange={handleSelect}
                      >
                        <option hidden value='placeholder'>Elige uno</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Select>
                      {errors.puntaje && (<p className="error">{errors.puntaje}</p>)}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="aspecto"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        ¿Cuál el el aspecto que más valoras? Solo puedes elegir uno.
                      </FormLabel>
                      <Select
                        id="aspecto"
                        defaultValue={'plaseholder'}
                        mt={1}
                        focusBorderColor="#5CE1E6"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        className="error"
                        name="aspecto"
                        value={value.aspecto}
                        onChange={handleSelect}
                      >
                        <option hidden value='placeholder'>Elige uno</option>
                        <option value="Tiempo de entrega">Tiempo de entrega</option>
                        <option value="Ofertas y combos">Ofertas y combos</option>
                        <option value="Tiempo de respuesta">Tiempo de respuesta</option>
                        <option value="Medios de pago">Medios de pago</option>
                        <option value="Variedad de productos">Variedad de productos</option>
                      </Select>
                      {errors.aspecto && (<p className="error">{errors.aspecto}</p>)}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{ color: "gray.50" }}
                      >
                        Comentarios adicionales
                      </FormLabel>
                      <Textarea
                        name='descripcion'
                        value={value.descripcion}
                        onChange={handleInputChange}
                        //placeholder='Mensaje'
                        size='sm'
                        className='error'
                      />

                      {errors.descripcion && (<p className="error">{errors.descripcion}</p>)}
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
                    // borderRadius={'full'} 
                    variant='solid'
                    //type="submit"
                    fontWeight='semibold'
                    bg='celeste.original'
                    color="white"
                    _focus={{ shadow: "" }}
                    onClick={e => handleClick(e)}

                  >
                    Enviar feedback
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
        <Link href='/'><Button
          //   borderRadius={'full'} 
          colorScheme='pink' variant='solid' /* bg="rosado.normal" */>
          Ir al inicio
        </Button></Link>
      </Box>
    )
  }
}

export default PaymentFeedback
