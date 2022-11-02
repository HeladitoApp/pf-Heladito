import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="#E9FBFC"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                border='1px'
                borderColor='celeste.normal'
                boxShadow='2xl'
                rounded="30px"
              >
                <Text fontFamily={'family.heading'}>{item.text} </Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src="https://i.pinimg.com/550x/af/4c/35/af4c35d5751533372974c03e155548d4.jpg"
                //bg="blue.300"
                border='1px'
                borderColor='rosado.normal'
                boxShadow='2xl'
                rounded="30px"
              ></Avatar>
              <Flex
                bg="#FFC6E9"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                m="1"
                p="3"
                border='1px'
                borderColor='rosado.normal'
                boxShadow='2xl'
                rounded="30px"
              >
                <Text fontFamily={'family.heading'} >{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
