import React from "react";
import { Flex, Avatar, AvatarBadge, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex  w="100%" h="65px" bg="rosado.original"  >
      <Avatar m={[2,3]} border= "1px solid black" boxSize="50px" name="Heladitos App" src="https://i.pinimg.com/550x/af/4c/35/af4c35d5751533372974c03e155548d4.jpg">
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" m={[1,10]} justify="center">
        <Text  p={2} fontFamily={'family.heading'} as='h4' fontSize='2xl'>
          Boty-heladito
        </Text>
        <Text color="green.500">Online</Text> 
      </Flex>
      
      
    </Flex>
  );
};

export default Header;
 

