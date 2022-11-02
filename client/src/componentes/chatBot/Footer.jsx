import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <Flex w="100%" mt="5" h="20">
      <Input
        placeholder="Escribe algo..."
        border="none"
        borderRadius="none"
        _focus={{
          border: "3px solid pink",
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
            window.scrollTo(0, 0);
          }
        }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      
      <Button 
        bg="black"
        color="white"
        borderRadius="30px" 
        w='70px' 
        h='10' 
        m="1"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Enviar
      </Button>
    </Flex>
  );
};

export default Footer;