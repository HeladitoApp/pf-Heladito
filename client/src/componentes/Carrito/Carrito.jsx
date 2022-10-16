import React, { useEffect, useState } from 'react';
import { Box, Alert, AlertIcon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, ScaleFade, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardsCarrito from './CardsCarrito';
import { addCompraDb } from '../../redux/actions/compras';
import { useDispatch, useSelector } from 'react-redux';
export default function Carrito({ isOpen, onOpen, onClose }) {
    const keycarrito = keyCarrito
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const [mensaje, setmensaje] = useState(false)
    const respuesta = useSelector((state) => state.state.respuestacompra)


    const [productosCarrito, setproductosCarrito] = useLocalStorage(keycarrito, []);


    function vaciarCarrito() {
        setproductosCarrito([])
    }
    let total = 0;
    productosCarrito.map(p => total = (p.price * p.cantidad) + total)
    function EnviarCompra() {

        const compra = {
            name: 'Pepito Lopez',
            productos: [],
            total: total,
            metodoDePago: 'Banco nacional',
            pagado: 'true'
        }
        productosCarrito.map(p => compra.productos.push({ id: p.id, name: p.name }))
        dispatch(addCompraDb(compra))
        setmensaje(true)
        setproductosCarrito([])
    }
    function cerrar_ventana() {
        setmensaje(false)
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
                    <DrawerCloseButton onClick={cerrar_ventana} />
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
                        {mensaje && <Alert status='success' variant='left-accent' height='30px' fontSize='sm' mt={2}>
                            <AlertIcon />
                            {respuesta}
                        </Alert>}
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