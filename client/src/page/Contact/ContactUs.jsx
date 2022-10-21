import React from 'react';
import {
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Box,
    SimpleGrid,
    Heading,
    Text,
    Stack,
    Select,
    Button,
    chakra,
    Textarea,
} from "@chakra-ui/react";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
                                <Heading color='#ff66c4' fontSize="3xl" fontWeight="medium" lineHeight="6">
                                    Contáctanos
                                </Heading>
                                <Text
                                    mt={1}
                                    fontSize="lg"
                                    color="gray.600"
                                    _dark={{ color: "gray.400" }}
                                >
                                    ¡Hola! Gracias por contactarte con nosotros. Si tienes un problema con tu pedido o no pudiste gestionar tu compra, por favor, déjanos los siguientes datos para que nuestro equipo se ponga en contacto contigo*. Es importante que los datos sean de la persona que registró el pedido.
                                </Text>
                            </Box>
                        </GridItem>

                        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
                            <chakra.form
                                onSubmit={handleSubmit}
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
                                                htmlFor="first_name"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Nombre
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                autoComplete="given-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 3]}>
                                            <FormLabel
                                                htmlFor="last_name"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Apellido
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                autoComplete="family-name"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>



                                        <FormControl as={GridItem} colSpan={[6, 4]}>
                                            <FormLabel
                                                htmlFor="email_address"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                E-mail
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                autoComplete="email"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
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
                                                País / Región
                                            </FormLabel>
                                            <Select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                placeholder="Select option"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            >
                                                <option>Argentina</option>
                                                <option>Perú</option>
                                                <option>Colombia</option>
                                            </Select>
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={6}>
                                            <FormLabel
                                                htmlFor="street_address"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Dirección
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="street_address"
                                                id="street_address"
                                                autoComplete="street-address"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                                            <FormLabel
                                                htmlFor="city"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Ciudad
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="city"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                                            <FormLabel
                                                htmlFor="state"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Estado / Provincia
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="state"
                                                id="state"
                                                autoComplete="state"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                                            <FormLabel
                                                htmlFor="postal_code"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                ZIP / Postal
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="postal_code"
                                                id="postal_code"
                                                autoComplete="postal-code"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                w="full"
                                                rounded="md"
                                            />
                                        </FormControl>

                                        <FormControl as={GridItem} colSpan={6}>
                                            <FormLabel
                                                htmlFor="street_address"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color="gray.700"
                                                _dark={{ color: "gray.50" }}
                                            >
                                                Mensaje
                                            </FormLabel>
                                            <Textarea
                                                //value={value}
                                                //onChange={handleInputChange}
                                                //placeholder='Mensaje'
                                                size='sm'
                                            />
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
                                        type="submit"
                                        color='#ff66c4'
                                        bg='#FFF5E5'
                                    >
                                        Enviar
                                    </Button>
                                </Box>
                            </chakra.form>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;

