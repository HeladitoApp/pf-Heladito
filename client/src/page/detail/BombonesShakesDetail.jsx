import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductById } from '../../redux/actions/details';
import Contador from '../../componentes/FromCardDetail/Contador/Contador';
import { chakra, Box, Flex, Image, Center, Stack, Circle, Wrap, HStack } from "@chakra-ui/react";
import s from './CardDetail.module.css';
import { useParams } from "react-router-dom";
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import ButtonAgregarBombonesShakes from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonAgregarBombonesShakes';
import ButtonComprarBombonesShakes from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonComprarBombonesShakes';


const BombonesShakesDetail = () => {

  //estados para Contador
  const [contador, setContador] = useState(0);


  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
  const loading = useSelector((state) => state.state.loading)

  const { productId } = useParams();


  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
    return () => {
      dispatch(clearDetails())
    }
  }, [dispatch, productId]);


  if (loading) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <Flex
        my={50}
        justifyContent='center'
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

                />
              </Circle>
            </Box>

            <Stack
              direction="column"
              px={{ base: 4, md: 8, lg: 20 }}
              py={10}

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
                $/ {detail.price}
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
                <Contador
                  contador={contador}
                  setContador={setContador}
                />
              </Stack>
              <HStack
                spacing={10}
                /* direction={['column', 'row']} */
                align='center'
                justify='content'
                h='4em'
              >
                <ButtonAgregarBombonesShakes
                  id={detail.id}
                  image={detail.image}
                  name={detail.name}
                  price={detail.price}
                  type={detail.type}
                  contador={contador}
                />
                <ButtonComprarBombonesShakes
                  id={detail.id}
                  image={detail.image}
                  name={detail.name}
                  price={detail.price}
                  type={detail.type}
                  contador={contador} />
              </HStack>
            </Stack>
          </Stack>

        ))}
      </Flex>
    )
  };
}

export default BombonesShakesDetail