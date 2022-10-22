import React, { useEffect, useState } from 'react';
import { Box, Alert, AlertIcon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, ScaleFade, Stack, Text, useDisclosure, Link } from '@chakra-ui/react';
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardsCarrito from './CardsCarrito';
import { Link as ReachLink } from "react-router-dom";
export default function Carrito({ isOpen, onOpen, onClose }) {
    const keycarrito = keyCarrito
    const btnRef = React.useRef()
    const [productosCarrito, setproductosCarrito] = useLocalStorage(keycarrito, []);

    function vaciarCarrito() {
        setproductosCarrito([])
    }
    let total = 0;
    productosCarrito.map(p => total = (p.price * p.cantidad) + total)
    const Total = total.toFixed(2)

    function redenrizarCarrito() {
        const item = window.localStorage.getItem(keycarrito)
        return item ? JSON.parse(item) : []
    }
    useEffect(() => {
        setproductosCarrito(redenrizarCarrito())
    }, [isOpen])


    // console.log(productosCarrito)
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'md'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px' size="xl">
                        <Heading as='h4' fontSize='3xl' >
                            Carrito de compras
                        </Heading>
                        <Stack direction='row' spacing={8}>
                            <Text fontSize='sm'> Tienes {productosCarrito.length} productos en el carrito
                            </Text>
                            <Box align="right">
                                {/* <Button size='xs' colorScheme='teal' onClick={() => prueba()}>
                                    Productos de prueba
                                </Button> */}
                                <Button ml={3} size='xs' colorScheme='teal' onClick={() => vaciarCarrito()}>
                                    Vaciar carrito
                                </Button>
                            </Box>
                        </Stack>
                    </DrawerHeader>
                    <DrawerBody>
                        <Input placeholder='Type here...' />
                        {productosCarrito.length === 0 ?
                            <Box pt={4}>
                                <Alert status='warning'>
                                    <AlertIcon />
                                    <Text as='b'>El carrito de compras se encuentra vacio</Text>
                                </Alert>
                            </Box> : false}
                        {productosCarrito && productosCarrito.map(c => (
                            <CardsCarrito
                                productosCarrito={productosCarrito}
                                setproductosCarrito={setproductosCarrito}
                                key={c.id}
                                id={c.id}
                                type={c.type}
                                img={c.img}
                                name={c.name}
                                price={c.price}
                                cantidad={c.cantidad} />)
                        )}
                    </DrawerBody>
                    <DrawerFooter>
                        {/* <Stack direction='row' width={'full'} > */}
                        <Text pr={1} fontSize='sm' as='sub' color={'rosado.normal'}>Subtotal: $/{Total}</Text>
                        <Text pr={4} fontSize='xl' as='b' color={'rosado.original'}>Total: $/{Total}</Text>
                        <Link as={ReachLink} to={`/product/cart`}>
                            <Button onClick={onClose} disabled={productosCarrito.length === 0 ? true : false} colorScheme='whatsapp' borderRadius={'full'} >Continuar</Button>
                        </Link>
                        {/* </Stack> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
