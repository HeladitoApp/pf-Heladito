import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductById } from '../../redux/actions/details';
import Contador from '../../componentes/FromCardDetail/Contador/Contador';
import { chakra, Flex, Image, Stack, Circle, VStack, HStack, Icon } from "@chakra-ui/react";
import s from './CardDetail.module.css';
import { useParams, Link } from "react-router-dom";
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import ButtonAgregarBombonesShakes from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonAgregarBombonesShakes';
import ButtonComprarBombonesShakes from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonComprarBombonesShakes';
import { FaRegHeart } from 'react-icons/fa';
import { updateFavoritos } from '../../redux/actions/updateFavoritos';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';

const BombonesShakesDetail = () => {

  //estados para Contador
  const [contador, setContador] = useState(0);


  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
  const loading = useSelector((state) => state.state.loading)

  const { productId } = useParams();
  const { user } = useAuth0();

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

  const handleFavs = (e) => {
    dispatch(getProductById(productId));
    const fav = product.map((f) => {
      return {
        email: user.email,
        favorito: {
          _id: productId,
          name: f.name,
          description: f.description,
          image: f.image
        }
      }
    });
    dispatch(updateFavoritos(fav[0]));
    swal(({
      title: `${product[0].name} agregado a favoritos.`,
      icon: "success",
      button: "Aceptar"
    }));
  }


  if (loading) {
    return (
      <Loading />
    )
  }
  else {
    return (
      <React.Fragment>
        <Flex
          my={50}
          mx="20%"
          justifyContent='center'
          spacing='5' >
          {product.map((detail, index) => (
            <HStack key={index} align="flex-start">
              <VStack
                className={s.cont1}
                // maxW="20rem"
                w="40%"
              >
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
                <Link>
                  <Icon
                    as={FaRegHeart}
                    onClick={handleFavs}
                    m="0"
                    p="0"
                    boxSize={8}
                    pointer
                  />
                </Link>
                <Circle>
                  <Image
                    src={detail.image}
                    alt={detail.name}
                    objectFit='cover'
                    maxW="21rem"
                  />
                </Circle>
              </VStack>

              <Stack
                //direction="column"
                //pr="4rem" /* {{ base: 4, md: 8, lg: 20 }} */
                pl="2rem"
                py={10}
                // maxW="50rem"
                w="60%"
              >
                <chakra.span
                  color="celeste.original"
                  _dark={{ color: "gray.300" }}
                  fontSize="2xl"
                  pr="1rem"
                  /* h='2em' */
                  /* mr='10%' */
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
                <Stack pr="1rem">
                  <Contador
                    contador={contador}
                    setContador={setContador}
                    max={detail.stock}
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
            </HStack>

          ))}

        </Flex>
      </React.Fragment>
    )
  };
}

export default BombonesShakesDetail