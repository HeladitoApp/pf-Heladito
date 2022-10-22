import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Button, Flex, FormControl, FormLabel, Heading, Image, Img, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import EditarPedido from "./editar_pedido";

export default function CardPedido({productosCarrito,setproductosCarrito,id,name,img,flavors,price,toppings,cantidad,type}) {
    const [contador, setcontador] = useState(cantidad)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
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
    return(
        <Box py={4} px={4} mt={"15px"} border='1px'
        borderColor='rosado.normal'
        boxShadow='2xl'
        rounded="30px">
             <Stack direction='row' >
                <Image src={img} boxSize='120px'  />
                <Heading as='h4' fontSize='2xl' pt={8} noOfLines={2}>{name}</Heading>
                <Spacer/>
                <Button colorScheme='red' variant='ghost' onClick={() => { deleteCarrito(id) }} >
                            <FaRegTrashAlt />
                    </Button>
             </Stack>
             <Heading fontSize='xl' p={3} color={'rosado.normal'}> Toppings </Heading>
             <Stack direction='row' spacing={2}>
                
               {toppings && toppings[0].map((t,index)=>(
                <Badge key={index} colorScheme='purple' borderRadius={'10px'} px={2}>{t}</Badge>

                ))}
             </Stack>
             <Flex mt={4}  p={2}> 
                <Button onClick={() => setContador('menos')} colorScheme='red' variant='outline' size='sm' borderRadius={'full'} disabled={contador !== 1 ? false : true}>
                    <FaMinus />
                </Button>
                    <Text p={1} px={15}>{contador}</Text>
                <Button onClick={() => setContador('mas')} size='sm' colorScheme='green' variant='outline' borderRadius={'full'}>
                    <FaPlus />
                </Button>
                <Spacer/>
                <Box>
                    <Text  color={'green'} fontFamily={'family.body'}>
                        Precio ${price}
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Link onClick={onOpen} as='b' color={'celeste.original'}>Editar producto</Link>
            </Box>
            <Modal
                scrollBehavior={'inside'}
                size={'xl'}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <EditarPedido img={img} name={name} onClose={onClose} />
            </Modal>
        </Box>  
    )
}