//traigo todos los toppings, selecciono cual quiero modificar.
//modifico :v

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
import { setLoading } from '../../redux/actions/loading';
import Loading from '../loading/loading';
import { updateExtra } from '../../redux/actions/updateExtra';
import { useDispatch, useSelector } from 'react-redux';
import { traerExtraById } from '../../redux/actions/getExtraById';
import { useParams } from 'react-router-dom';



export default function ActualizarExtra() {
  const { id } = useParams()
  const detail = useSelector((state) => state.state.toppingDetail[0])
  const loading = useSelector((state) => state.state.loading)


  const dispatch = useDispatch()
  const [input, setInput] = useState({
    _id: id,
    name: null,
    image: null,
    price: null,
    stock: null,
    type: null
  })

  useEffect(() => {
    dispatch(traerExtraById(id))
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

  }

  function handleSelectTypeTop(e) {
    setInput({
      ...input,
      type: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateExtra(input))
    swal({
      title: 'Extra actualizado con exito!',
      icon: "success",
      button: "aceptar"
    })
    setInput({
      _id: '',
      name: '',
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
                      Actualizar Extra
                    </Heading>
                    <Text
                      mt={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{ color: "gray.400" }}
                    >
                      Modifique los campos necesarios.
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
                            Elige un tipo de extra
                          </FormLabel>
                          <Select
                            id="selectTipo"
                            onChange={e => handleSelectTypeTop(e)}
                            mt={1}
                            focusBorderColor="#5CE1E6"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            className="error"
                          >
                            <option hidden value='plaseholder'>{detail?.type}</option>
                            <option value="toppings secos">topping secos</option>
                            <option value=" toppings futas">tooping frutas</option>

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
                        ACTUALIZAR EXTRA!
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
              <a href='/'>volver</a>
            </Button>
          </Box>
        </Box>
      </Box>
  );
  };
}