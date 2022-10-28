import React from "react";
import {
  Box,
  Image,
  Link,
  Heading,
} from "@chakra-ui/react";

const FavCard = ({f}) => {
  //console.log("Esto es f:", f);
  return (
    <Link href={`/product/${f._id}`} style={{ textDecoration: 'none', paddingLeft: 2, paddingRight: 2 }} >
      <Box
        // py={4}
        h="23rem"
        w="18rem"
        mt="1rem"
        border="1px"
        borderColor="rosado.normal"
        boxShadow="2xl"
        rounded="2rem"
        overflow="hidden"
        mx="1rem"
        justify="center"
        align="center"
        _hover={{ bg: "amarillo.muy_claro", transform: "scale(1.01)" }}
      >
        <Image m="1rem" w="15rem" h="15rem" src={f.image} alt="avatar" _hover={{ transform: "scale(1.04)" }}/>

        <Box px="4" align="center">
          <Heading fontFamily={"family.heading"} as="h4" size="md" h="4rem" color="rosado.normal">
            {f.name}
          </Heading>
        </Box>
        
      </Box>
 </Link>
  );
};

export default FavCard;
