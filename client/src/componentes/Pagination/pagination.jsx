import { Flex, Icon, Button } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



export default function Pagination({page, setPage, max}) {
    const PagButton = (props) => {
      const activeStyle = {
        bg: "brand.600",
        _dark: {
          bg: "brand.500",
        },
        color: "white",
      };


      return (
        <Button
          mx={1}
          px={4}
          py={2}
          rounded="md"
          bg="rosado.claro"
          _dark={{
            bg: "gray.800",
          }}
          color="gray.700"
          opacity={props.disabled && 0.6}
          _hover={!props.disabled && activeStyle}
          cursor={props.disabled && "not-allowed"}
          {...(props.active && activeStyle)}
          display={
            props.p &&
            !props.active && {
              base: "none",
              sm: "block",
            }
          }
        >
          {props.children}
        </Button>
      );
    };

    const nextPage = () => {
        setPage(parseInt(page) + 1);
      };
    const previusPage = () => {
        setPage(parseInt(page) - 1);
      };
      console.log(max)

    return (
      <Flex
        //bg="white"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex>
          <PagButton>
            <Icon
            onClick={previusPage} disabled={page === 1}
              as={IoIosArrowBack}
              color="amarillo.original"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>

          <PagButton>
            <Icon
              onClick={nextPage} disabled={page === max}
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>
        </Flex>
      </Flex>
    );
  };
  