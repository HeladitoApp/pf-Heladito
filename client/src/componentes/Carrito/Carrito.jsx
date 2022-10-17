import React from 'react';
import { Box, Alert, AlertIcon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, ScaleFade, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardsCarrito from './CardsCarrito';
import { addCompraDb } from '../../redux/actions/compras';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function Carrito({ isOpen, onOpen, onClose }) {
    const keycarrito = keyCarrito
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const productosPrueba = [
        {
            id: 1,
            name: "HeladitosApp mediano de 1 sabor + toppings",
            img: "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665533182/e.cups_mt1s_bg01yi.png",
            price: 123,
            type: "helados",
            cantidad: 2,
            flavors: [],
            toppings: []
        },
        {
            id: 2,
            name: "2 vasitos small con topping + 1 bombón HeladitosAp",
            img: "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186875/e.promo_v1_wanab3.png",
            price: 123,
            type: "combos",
            cantidad: 4,
            flavors: [],
            toppings: []
        }
    ]
    const [productosCarrito, setproductosCarrito] = useLocalStorage(keycarrito, []);


    function prueba() {
        setproductosCarrito(productosPrueba)

    }
    function vaciarCarrito() {
        setproductosCarrito([])
    }
 

    let total = 0;
    productosCarrito.map(p => total = (p.price * p.cantidad) + total)
    function EnviarCompra() {
        const compra = {
            id_usuario: '1',
            productos: [],
            total: total,
            metodoDePago: 'Efectivo',
            pagado: 'true'
        }
        productosCarrito.map(p => compra.productos.push(p.id))
        dispatch(addCompraDb(compra))
        
    }

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
                            <Text fontSize='sm'>
                                Tienes {productosCarrito.length} productos en el carrito
                            </Text>
                            <Box align="right">
                                <Button size='xs' colorScheme='teal' onClick={() => prueba()}>
                                    Productos de prueba
                                </Button>
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
                        <Text pr={1} fontSize='sm' as='sub' color={'rosado.normal'}>Subtotal: $/{total}</Text>
                        <Text pr={4} fontSize='xl' as='b' color={'rosado.original'}>Total: $/{total}</Text>
                        <Button onClick={() => EnviarCompra()} disabled={productosCarrito.length === 0 ? true : false} colorScheme='whatsapp' borderRadius={'full'} >PAGAR</Button>
                        {/* </Stack> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}