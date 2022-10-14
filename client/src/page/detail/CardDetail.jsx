import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlavorsList from '../../componentes/FromCardDetail/Acordeon/FlavorsList';
import ToppingsList from '../../componentes/FromCardDetail/Acordeon/ToppingsList';
import Contador from '../../componentes/FromCardDetail/Contador/Contador';
import { chakra, Box, Flex, Image, Center, Stack, Circle, Wrap, HStack } from "@chakra-ui/react";
import s from './CardDetail.module.css';
import ButtonAgregar from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonAgregar';
import ButtonComprar from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonComprar';

export default function CardDetail() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
  console.log(detail)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id]);

  return (
    <Flex
      my={50}
      justifyContent='center'
      /* direction={{ base: "column", lg: "row" }} */
      /* mx={{ base: 50, lg: 120, md: 120 }} */
      /*  ml='3.75em' */
      /* direction={['column', 'row']} */
      /* direction={{ base: "row"}} */
      spacing='5' >
      {product.map((detail, index) => (
        <Stack key={index} >
          <Box className={s.cont1} >
            <chakra.h1
              mb={4}
              fontSize='2.5em'
              fontWeight="bold"
              /* color="b#FF8CD3" */
              lineHeight="shorter"
              mx='auto'
              width='12em'
            >
              {detail.name}
            </chakra.h1>
            <Circle>
              <Image
                src={detail.image}
                alt={detail.name}
                objectFit='cover'
              /* w="25em"
              h='25em'
              mx='auto'
              mt='10%' */
              /* pos='absolute' */
              />
            </Circle>
          </Box>

          <Stack
            direction="column"
            /* ml='8em' */
            /* alignItems="start" */
            px={{ base: 4, md: 8, lg: 20 }}
            py={10}
          /* zIndex={3} */
          >
            <chakra.span
              color="celeste.original"
              _dark={{ color: "gray.300" }}
              fontSize="lg"
              h='2em'
              mr='10%'
              align='right'
              textTransform="uppercase"
              fontWeight="extrabold"
            >
              {detail.price}
            </chakra.span>

            <chakra.p
              pr={{ base: 0, lg: 16 }}
              mb={4}
              fontSize="lg"
              color="brand.600"
              _dark={{ color: "gray.400" }}
              h='3em'
              letterSpacing="wider"
            >
              {detail.description}
            </chakra.p>
            <Stack >
              <Contador />
              <FlavorsList />
              <ToppingsList />
            </Stack>
            <HStack
              spacing={10}
              /* direction={['column', 'row']} */
              align='center'
              justify='content'
              h='4em'
            >
              <ButtonAgregar />
              <ButtonComprar />
            </HStack>
          </Stack>
        </Stack>

      ))}
    </Flex>
  )
};
