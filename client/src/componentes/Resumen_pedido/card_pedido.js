import { Box, Button, Flex, Heading, Image, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CardPedido({id,name,img,flavors,price,toppings,cantidad,type}) {
    return(
        <Box py={4} px={4} mt={"15px"} border='1px'
        borderColor='rosado.normal'
        boxShadow='2xl'
        rounded="30px">
             <Stack direction='row' textAlign={'center'}>
                <Image src={img} boxSize='120px'  />
                <Heading as='h4' fontSize='2xl' pt={8} noOfLines={2}>{name}</Heading>
             </Stack>
             <Stack>
               {toppings && toppings[0].map((t,index)=>(
                    <Text key={index}> {t}</Text>
                ))}
             </Stack>
             <Flex mt={4}  p={2}> 
                <Button  colorScheme='red' variant='outline' size='sm' borderRadius={'full'} disabled={cantidad !== 1 ? false : true}>
                     <FaMinus />
                </Button>
                     <Text p={1} px={15}>{cantidad}</Text>
                <Button  size='sm' colorScheme='green' variant='outline' borderRadius={'full'}>
                    <FaPlus />
                </Button>
                <Spacer/>
                <Box>
                    <Text>
                        Precio ${price}
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Link>Editar producto</Link>
            </Box>
        </Box>
        
    )
}