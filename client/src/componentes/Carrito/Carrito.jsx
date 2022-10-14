import React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, ScaleFade, Stack, Text, useDisclosure } from '@chakra-ui/react';

import { useState } from "react"
import { useLocalStorage } from '../../utils/useLocalStorage';
// import { useDispatch, useSelector } from "react-redux";
import { getProdsFromDb } from "../../redux/actions/products";
import { useEffect } from "react";
import CardsCarrito from './CardsCarrito';
export default function Carrito({ isOpen, onOpen, onClose }) {
    const btnRef = React.useRef()
    // const dispatch = useDispatch()
    // const productos = useSelector(state => state.state.productos)
    // const productoIndi = productos.slice(0, 4)

    const [productosCarrito, setproductosCarrito] = useLocalStorage('prueba_pruductos', []);
    let total = 0;
    productosCarrito.map(p => total = p.price + total)
    console.log(productosCarrito)
    // useEffect(() => {
    //     setContador(productoIndi)
    //     dispatch(getProdsFromDb())

    // }, [dispatch])
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
                        <Text fontSize='sm'> Tienes {productosCarrito.length} productos en el carrito</Text>
                    </DrawerHeader>
                    <DrawerBody>
                        <Input placeholder='Type here...' />
                        {productosCarrito && productosCarrito.map(c => (
                            <CardsCarrito key={c._id} type={c.type} img={c.image} name={c.name} price={c.price} />
                        )
                        )}
                    </DrawerBody>
                    <DrawerFooter>
                        {/* <Stack direction='row' width={'full'} > */}
                        <Text pr={1} fontSize='sm' as='sub' color={'rosado.normal'}>Subtotal: $/{total}</Text>
                        <Text pr={4} fontSize='xl' as='b' color={'rosado.original'}>Total: $/{total}</Text>
                        <Button colorScheme='whatsapp' borderRadius={'full'} >PAGAR</Button>
                        {/* </Stack> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}