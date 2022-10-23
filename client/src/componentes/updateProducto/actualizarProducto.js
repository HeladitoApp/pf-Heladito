//primero de la card puedo obtener el id. Hago un link a la ruta de update en el componente de card
//de ahi puedo o no renderizar el id y nombre, descripcion, etc. para que lo pueda ver y asi actualizarlo
//despues hago el submit al back y ver si funciona jsjsjs

import './updateProduct.css'
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
import { updateProduct } from '../../redux/actions/updateProduct';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../loading/loading';
import { useParams } from "react-router"
import { traerUsuariosById } from '../../redux/actions/getProductosById'
import { Link } from 'react-router-dom';

// function control(input) {
//     let error = {}
//     if(!input.name) error.name = 'Ingrese un nombre'
//     else if (!input.description) error.description = 'La descripcion es necesaria'
//     else if (!input.image) error.image = 'Ingrese una imagen'
//     else if (!input.price) error.price = 'Ingrese un precio'
//     else if (!input.stock) error.stock = 'Ingrese cantidad en stock'
//     // else if (!input.type) error.type = 'Seleccione un tipo de producto'
//     return error
// }

export default function ActualizarProducto() {
  const { id } = useParams()
  const loading = useSelector((state) => state.state.loading)
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.state.details[0])
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    _id: id,
    name: null,
    description: null,
    image: null,
    price: null,
    stock: null,
    type: null
  })
  useEffect(() => {
    dispatch(traerUsuariosById(id))
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  // let name = detail?.name
  // setInput({name: name})
  // if (detail) { setInput({
  // _id: detail?._id,
  // name: detail?.name,
  // description: detail?.description,
  // image: detail?.image,
  // price: detail?.price,
  // stock: detail?.stock,
  // type: detail?.type
  // })}

  function handleInputsChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

  }
  function handleSelectType(e) {
    setInput({
      ...input,
      type: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateProduct(input))
    swal({
      title: 'Producto actualizado con exito!',
      icon: "success",
      button: "aceptar"
    })
    setInput({
      _id: '',
      name: '',
      description: '',
      image: '',
      price: '',
      stock: '',
      type: ''
    })
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
          <Box as="main" p="10">
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
                        Actualizar producto
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
                              // value={input.name} 
                              name='name'
                              defaultValue={detail?.name}
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
                              Descripción
                            </FormLabel>
                            <Textarea
                              type="text"
                              defaultValue={detail?.description}
                              name='description'
                              onChange={(e) => handleInputsChange(e)}
                              mt={1}
                              rows={3}
                              shadow="sm"
                              focusBorderColor="#5CE1E6"
                              fontSize={{ sm: "sm" }}
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
                                defaultValue={detail?.image}
                                name='image'
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
                              defaultValue={detail?.price}
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
                              defaultValue={detail?.stock}
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
                              defaultValue={detail?.type}
                              onChange={e => handleSelectType(e)}
                              mt={1}
                              focusBorderColor="#5CE1E6"
                              shadow="sm"
                              size="sm"
                              w="full"
                              rounded="md"
                              className="error"
                            >
                              <option value="helados">Helados</option>
                              <option value="combos">Combos</option>
                              <option value="bombones">Bombones</option>
                              <option value="shakes">Shakes</option>
                              <option value="parfaits">Parfaits</option>
                              <option value="crepes">Crepes</option>
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
                          ACTUALIZAR PRODUCTO!
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
      </Box>
    );
  };
}