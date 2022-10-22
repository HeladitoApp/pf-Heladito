import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Img, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function EditarPedido({img,name,onClose}){
    const flavors = useSelector(state => state.state.flavors);
    const toppings = useSelector(state => state.state.toppings);
    return(
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Stack direction='row'>
                        <Img
                        src={img}
                        boxSize="220px"
                        />
                        <box>
                            <Accordion allowMultiple w={'300px'}>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                        Elige un sabors
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <RadioGroup>
                                        <Wrap>
                                            {flavors && flavors.map(f=>(
                                                <WrapItem key={f._id}>
                                                    <Radio
                                                        
                                                        align="center"
                                                        justify="center"
                                                        w='auto'
                                                        bg='white'
                                                        value={f.name}
                                                        name='sabor'
                                                        cursor='pointer'>
                                                    <Image
                                                        src={f.image}
                                                        alt={'sabor'}
                                                        boxSize={'50px'}
                                                    />
                                                    <Text fontSize='xs'>
                                                        {f.name}
                                                    </Text>  
                                                    </Radio>
                                                </WrapItem>
                                            ))}

                                    </Wrap>
                                </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                        Elige un sabors
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <RadioGroup>
                                        <Wrap>
                                            {toppings && toppings.map(f=>(
                                                <WrapItem key={f._id}>
                                                    <Radio
                                                        
                                                        align="center"
                                                        justify="center"
                                                        w='auto'
                                                        bg='white'
                                                        value={f.name}
                                                        name='sabor'
                                                        cursor='pointer'>
                                                    <Image
                                                        src={f.image}
                                                        alt={'sabor'}
                                                        boxSize={'50px'}
                                                    />
                                                    <Text fontSize='xs'>
                                                        {f.name}
                                                    </Text>  
                                                    </Radio>
                                                </WrapItem>
                                            ))}
                                    </Wrap>
                                </RadioGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>
                        </box>
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='whatsapp' mr={3}>
                    Guardar Cambios
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>     
        </>
    )
}