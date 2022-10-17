import { Flex, Icon, Button } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



export default function Pagination({page, setPage, max}) {
  

    const nextPage = () => {
        setPage(parseInt(page) + 1);
      };
    const previusPage = () => {
        setPage(parseInt(page) - 1);
      };

    return (
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        px={50}
        pb={5}
        pt={5}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex>
          <Button
          onClick={previusPage} 
          isDisabled = {page === 1} 
          mr = "10%">

            <Icon
              as={IoIosArrowBack}
              color="gray.700"
              _dark={{
              color: "gray.200",
              }}
              boxSize={4}
            />
          </Button>

          <Button
          isDisabled = {page === max}
          onClick={nextPage} 
          ml = "10%">
            <Icon
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </Button>
        </Flex>
      </Flex>
    );
  };
  