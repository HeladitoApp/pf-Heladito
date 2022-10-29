import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/actions/addMessage';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';

function control(input) {
    let error = {}
    if (input.name <= 1) {
        error.name = 'Por favor, ingrese su nombre completo'
    } else if (input.lastname <= 1) {
        error.lastname = 'Por favor, ingrese su apellido completo'
        /* } else if (!input.email.includes('2')) {
            error.email = 'Por favor, ingrese un email válido' */
    } else if (isNaN(input.contact)) {
        error.contact = 'No puede contener espacios ni letras'
    } else if (input.contact.legth >= 13) {
        error.contact = 'No puede contener más de 13 dígitos'
    } else if (!(input.contact[0]).includes('+')) {
        error.contact = 'Debes ingresar el prefijo de tu país'
    } else if (input.message === '') {
        error.message = 'Por favor, ingresa un mensaje'
    }
    return error
}

const ContactUs = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.state.loading)


    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        contact: '',
        message: '',
    });

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
            input.name &&
            input.lastname &&
            input.email &&
            input.contact &&
            input.message) {
            dispatch(addMessage(input))
            setInput({
                name: '',
                lastname: '',
                email: '',
                contact: '',
                message: '',
            })
            swal({
                title: 'Su mensaje fue enviado correctamente. En breve nos pondremos en contacto con usted!',
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
                                        Contáctanos
                                    </Heading>
                                    <Text
                                        mt={1}
                                        fontSize="sm"
                                        color="gray.600"
                                        _dark={{ color: "gray.400" }}
                                    >
                                        ¡Hola! Gracias por contactarte con nosotros. Si tienes un problema con tu pedido o no pudiste gestionar tu compra, por favor, déjanos los siguientes datos para que nuestro equipo se ponga en contacto contigo*. Es importante que los datos sean de la persona que registró el pedido.
                                    </Text>
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
                                                    name="name"
                                                    id="name"
                                                    value={input.name}
                                                    onChange={handleInputChange}
                                                    autoComplete="given-name"
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

                                            <FormControl as={GridItem} colSpan={[6, 3]}>
                                                <FormLabel
                                                    htmlFor="lastname"
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{ color: "gray.50" }}
                                                >
                                                    Apellido
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    name="lastname"
                                                    id="last_name"
                                                    value={input.lastname}
                                                    onChange={handleInputChange}
                                                    autoComplete="family-name"
                                                    mt={1}
                                                    focusBorderColor="brand.400"
                                                    shadow="sm"
                                                    size="sm"
                                                    w="full"
                                                    rounded="md"
                                                    className='lastname'
                                                />
                                                {errors.lastname && (<p className="error">{errors.lastname}</p>)}
                                            </FormControl>

                                            <FormControl as={GridItem} colSpan={[6, 3]}>
                                                <FormLabel
                                                    htmlFor="email"
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{ color: "gray.50" }}
                                                >
                                                    E-mail
                                                </FormLabel>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={input.email}
                                                    onChange={handleInputChange}
                                                    autoComplete="email"
                                                    mt={1}
                                                    focusBorderColor="brand.400"
                                                    shadow="sm"
                                                    size="sm"
                                                    w="full"
                                                    rounded="md"
                                                    className='error'
                                                />
                                                {errors.email && (<p className="error">{errors.email}</p>)}
                                            </FormControl>

                                            <FormControl as={GridItem} colSpan={[6, 3]}>
                                                <FormLabel
                                                    htmlFor="contact"
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{ color: "gray.50" }}
                                                >
                                                    Número de contacto
                                                </FormLabel>

                                                <Input
                                                    type='tel'
                                                    pattern="[0-9]{9}"
                                                    name="contact"
                                                    id="contact"
                                                    value={input.contact}
                                                    onChange={handleInputChange}
                                                    placeholder='(+54) - 999999999'
                                                    autoComplete="contacto"
                                                    mt={1}
                                                    focusBorderColor="brand.400"
                                                    shadow="sm"
                                                    size="sm"
                                                    w="full"
                                                    rounded="md"
                                                    className='error'
                                                /> <br />
                                                {errors.contact && (<p className="error">{errors.contact}</p>)}
                                            </FormControl>

                                            <FormControl as={GridItem} colSpan={6}>
                                                <FormLabel
                                                    htmlFor="message"
                                                    fontSize="sm"
                                                    fontWeight="md"
                                                    color="gray.700"
                                                    _dark={{ color: "gray.50" }}
                                                >
                                                    Mensaje
                                                </FormLabel>

                                                <Textarea
                                                    name='message'
                                                    value={input.message}
                                                    onChange={handleInputChange}
                                                    //placeholder='Mensaje'
                                                    size='sm'
                                                    className='error'
                                                />
                                                {errors.message && (<p className="error">{errors.message}</p>)}
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
                                            //type="submit"
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
                    <Link href='/'><Button
                        //   borderRadius={'full'} 
                        colorScheme='pink' variant='solid' /* bg="rosado.normal" */>
                        Ir al inicio
                    </Button></Link>
                </Box>
            </Box>
        );
    };
};

export default ContactUs;

