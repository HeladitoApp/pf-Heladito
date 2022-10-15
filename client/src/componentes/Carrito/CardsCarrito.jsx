import { Badge, Box, Button, CloseButton, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'

export default function CardsCarrito({ productosCarrito, setproductosCarrito, id, img, name, price, type, cantidad, }) {
    const [contador, setcontador] = useState(cantidad)
    function setContador(valor) {
        const productoactualizado = productosCarrito;

        if (valor === 'menos') {
            setcontador(contador - 1)
            for (let i = 0; i < productoactualizado.length; i++) {
                if (productoactualizado[i].id === id) {
                    productoactualizado[i].cantidad = productoactualizado[i].cantidad - 1;
                }
            }
            setproductosCarrito([...productoactualizado])

            // })
        } else {
            setcontador(contador + 1)
            for (let i = 0; i < productoactualizado.length; i++) {
                if (productoactualizado[i].id === id) {
                    productoactualizado[i].cantidad = productoactualizado[i].cantidad + 1;
                }
            }
            setproductosCarrito([...productoactualizado])
        }
    }

    function deleteCarrito(id) {
        const productoactualizado = productosCarrito.filter(p => p.id !== id)
        setproductosCarrito(productoactualizado)
    }

    return (
        <>
            <Box py={4} px={4} mt={"15px"} border='1px'
                borderColor='rosado.normal'
                boxShadow='2xl'
                rounded="30px">

                <Stack direction='row'>
                    <Image src={img} boxSize='150px' />

                    <Box align="left">
                        <Heading mb={0} fontFamily={'family.heading'} as='h4' size='sm' > {name}</Heading>
                        <Text color={'green'} fontFamily={'family.body'} fontSize='md'>Precio $/{price}</Text>
                        <Badge colorScheme='purple' borderRadius={'10px'} px={2}>{type}</Badge>
                        <Stack borderRadius={'20px'} border={"1px"} borderColor={"gray.200"} direction='row' mt={4} width={'140px'} p={2}>
                            <Button onClick={() => setContador('menos')} colorScheme='red' variant='outline' size='sm' borderRadius={'full'} disabled={contador !== 1 ? false : true}>
                                <FaMinus />
                            </Button>
                            <Text p={1} px={15}>{contador}</Text>
                            <Button onClick={() => setContador('mas')} size='sm' colorScheme='green' variant='outline' borderRadius={'full'}>
                                <FaPlus />
                            </Button>
                        </Stack>
                    </Box>
                    <Box align="right" >
                        <Button colorScheme='red' variant='ghost' onClick={() => { deleteCarrito(id) }}>
                            <FaRegTrashAlt />
                        </Button>
                    </Box>
                    {/* <CloseButton size='sm' /> */}
                </Stack >
            </Box>
        </>
    )
}