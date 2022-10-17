import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductById } from '../../redux/actions/details';
import FlavorsList from '../../componentes/FromCardDetail/Acordeon/FlavorsList';
import ToppingsList from '../../componentes/FromCardDetail/Acordeon/ToppingsList';
import Contador from '../../componentes/FromCardDetail/Contador/Contador';
import { chakra, Box, Flex, Image, Center, Stack, Circle, Wrap, HStack } from "@chakra-ui/react";
import s from './CardDetail.module.css';
import ButtonAgregar from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonAgregar';
import ButtonComprar from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonComprar';
import { useParams } from "react-router-dom";
import { clearDetails } from '../../redux/slices';


export default function CardDetail() {

  //estados para Contador
  const [contador, setContador] = useState(0);

  //estado para FlavorsList
  const [sabor, setSabor] = React.useState('');

  //estado para ToppingsList
  const [checkedToppings, setCheckedToppings] = useState([]);


  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
  console.log(product)
  const { productId } = useParams();
  console.log(productId)

  useEffect(() => {
    dispatch(getProductById(productId));
    return ()=>{
      dispatch(clearDetails())
    }
  }, [dispatch, productId]);

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
              <FlavorsList
                sabor={sabor}
                setSabor={setSabor}
              />
              <ToppingsList
                checkedToppings={checkedToppings}
                setCheckedToppings={setCheckedToppings}
              />
            </Stack>
            <HStack
              spacing={10}
              /* direction={['column', 'row']} */
              align='center'
              justify='content'
              h='4em'
            >
              <ButtonAgregar
                id={detail.id}
                image={detail.image}
                name={detail.name}
                price={detail.price}
                type={detail.type}
                sabor={sabor}
                checkedToppings={checkedToppings}
                contador={contador}
              />
              <ButtonComprar 
              id={detail.id}
              image={detail.image}
              name={detail.name}
              price={detail.price}
              type={detail.type}
              sabor={sabor}
              checkedToppings={checkedToppings}
              contador={contador}/>
            </HStack>
          </Stack>
        </Stack>

      ))}
    </Flex>
  )
};
