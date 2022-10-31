import './addProductos.css'
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
import { addProduct } from '../../redux/actions/addProduct';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../loading/loading';
import {Link} from 'react-router-dom'



function control(input) {
  let error = {}
  if (!input.name) error.name = 'Ingrese un nombre'
  if (!input.description) error.description = 'La descripcion es necesaria'
  if (!input.image) error.image = 'Ingrese una imagen'
  if (!input.price) error.price = 'Ingrese un precio'
  if (!input.stock) error.stock = 'Ingrese cantidad en stock'
  if (!input.type) error.type = 'Seleccione un tipo de producto'
  if (!input.detailModel) error.detailModel = 'Seleccione un modelo de detalle'
  return error
}

export default function AgregarProducto2() {

  const loading = useSelector((state) => state.state.loading)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    stock: '',
    type: '',
    detailModel: ''
  })

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);


  function handleInputsChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(control({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  function handleSelectType(e) {
    setInput({
      ...input,
      type: e.target.value
    })
  }

  function handleSelectDetail(e) {
    setInput({
      ...input,
      detailModel: e.target.value
    })
  }


  
  function handleSubmit(e) {
    e.preventDefault()
    if (input.name &&
      input.description &&
      input.image &&
      input.price &&
      input.stock &&
      input.type  &&
      input.detailModel) {
      dispatch(addProduct(input))
      swal({
        title: 'Producto creado con exito!',
        icon: "success",
        button: "Aceptar"
      })
      setInput({
        name: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        type: '',
        detailModel: ''
      })
    }
    else {
      swal({
        title: 'Por favor, complete todos los campos para continuar',
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
                      Crear producto
                    </Heading>
                    <Text
                      mt={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                    >
                      Complete todos los campos.
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
                            value={input.name}
                            name='name'
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
                          {errors.name && (<p className="error">{errors.name}</p>)}
                        </FormControl>



                        <FormControl as={GridItem} colSpan={[6, 4]}>
                          <FormLabel
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Descripción
                          </FormLabel>
                          <Textarea
                            type="text"
                            value={input.description}
                            name='description'
                            onChange={(e) => handleInputsChange(e)}
                            mt={1}
                            rows={3}
                            shadow="sm"
                            focusBorderColor="#5CE1E6"
                            fontSize={{ sm: "sm" }}
                            className="error"
                          />
                          {errors.description && (<p className="error">{errors.description}</p>)}
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 4]}>
                          <FormLabel
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Imagen
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
                              value={input.image}
                              name='image'
                              onChange={(e) => handleInputsChange(e)}
                              placeholder="www.example.com"
                              focusBorderColor="#5CE1E6"
                              rounded="md"
                              className="error"
                            />
                          </InputGroup>
                          {errors.image && (<p className="error">{errors.image}</p>)}
                          <FormHelperText>
                            Ingrese la URL de la imagen.
                          </FormHelperText>
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 3]}>
                          <FormLabel
                            htmlFor="price"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Precio
                          </FormLabel>
                          <Input
                            type="number"
                            value={input.price}
                            onChange={(e) => handleInputsChange(e)}
                            name="price"
                            id="price"
                            mt={1}
                            focusBorderColor="#5CE1E6"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            className="error"
                          />
                          {errors.price && (<p className="error">{errors.price}</p>)}
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 3]}>
                          <FormLabel
                            htmlFor="stock"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Stock
                          </FormLabel>
                          <Input
                            type="number"
                            value={input.stock}
                            onChange={(e) => handleInputsChange(e)}
                            name="stock"
                            id="stock"
                            mt={1}
                            focusBorderColor="#5CE1E6"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            className="error"
                          />
                          {errors.stock && (<p className="error">{errors.stock}</p>)}
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 3]}>
                          <FormLabel
                            htmlFor="country"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Elige un tipo de producto
                          </FormLabel>
                          <Select
                            id="selectTipo"
                            defaultValue={'plaseholder'}
                            onChange={e => handleSelectType(e)}
                            mt={1}
                            focusBorderColor="#5CE1E6"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            className="error"
                          >
                            <option hidden value='plaseholder'>Productos</option>
                            <option value="helados">Helados</option>
                            <option value="combos">Combos</option>
                            <option value="bombones">Bombones</option>
                            <option value="shakes">Shakes</option>
                            <option value="parfaits">Parfaits</option>
                            <option value="crepes">Crepes</option>
                          </Select>
                          {/* {errors.type && (<p className="error">{errors.type}</p>)} */}
                        </FormControl>

                        <FormControl as={GridItem} colSpan={[6, 3]}>
                          <FormLabel
                            htmlFor="country"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{ color: "gray.50" }}
                          >
                            Elige un modelo de detalle
                          </FormLabel>
                          <Select
                            id="selectModel"
                            defaultValue={'plaseholder'}
                            onChange={e => handleSelectDetail(e)}
                            mt={1}
                            focusBorderColor="#5CE1E6"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            className="error"
                          >
                            <option hidden value='plaseholder'>Modelos</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="I">I</option>
                          </Select>
                          {/* {errors.detailModel && (<p className="error">{errors.detailModel}</p>)} */}
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
                        ¡AGREGAR PRODUCTO!
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
            <Link to={'/admin'}>
              <Button
                borderRadius={'full'}
                colorScheme='pink' variant='solid'>
                  Volver        
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  };
}