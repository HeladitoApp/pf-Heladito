import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductById } from '../../redux/actions/details';
import ToppingsList from '../../componentes/FromCardDetail/Acordeon/ToppingsList';
import Contador from '../../componentes/FromCardDetail/Contador/Contador';
import { chakra, Flex, Image, Stack, Circle, HStack, VStack, Icon } from "@chakra-ui/react";
import s from './CardDetail.module.css';
import { Link, useParams } from "react-router-dom";
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import { updateFavoritos } from '../../redux/actions/updateFavoritos';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import TwoFlavorsList from '../../componentes/FromCardDetail/Acordeon/twoFlavorList';
import ButtonAgregarB from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonAgregarB';
import ButtonComprarB from '../../componentes/FromCardDetail/Buttons Agregar Comprar/ButtonComprarB';
import { getFavoritosByEmail } from '../../redux/actions/getFavoritosByEmail';


export default function BcardDetail() {

  //estados para Contador
  const [contador, setContador] = useState(1);

  //estado para TwoFlavorsList
  const [checkedFlavors, setCheckedFlavors] = React.useState('');

  //estado para ToppingsList
  const [checkedToppings, setCheckedToppings] = useState([]);


  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
  const loading = useSelector((state) => state.state.loading)
  const favoritos = useSelector((state) => state.state.favoritos);

  const { productId } = useParams();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(getFavoritosByEmail(user.email));
    dispatch(setLoading(true));
    window.scrollTo(0, 0);
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
  };

  const handleFavs2 = (e) => {
    swal({
      title: 'Este producto ya se encuentra en tus favoritos ',
      icon: "info",
      button: "Aceptar"
    })
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
                {
                  isAuthenticated ?
                    favoritos.map((e) => e._id).includes(productId) ?                      
                      (
                        <Link>
                          <Icon
                            as={FaHeart}
                            onClick={handleFavs2} /* isAuthenticated ? handleFavs : Login*/
                            ml="25rem"
                            p="0"
                            boxSize={8}                         
                          />
                        </Link>
                      ) : (
                        <Link>
                          <Icon
                            as={FaRegHeart}
                            onClick={handleFavs} /* isAuthenticated ? handleFavs : Login*/
                            ml="25rem"
                            p="0"
                            boxSize={8}                           
                          />
                        </Link>
                      )
                    : null
                  }
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
                  <TwoFlavorsList
                    checkedFlavors={checkedFlavors}
                    setCheckedFlavors={setCheckedFlavors}
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
                  <ButtonAgregarB
                    id={detail._id}
                    image={detail.image}
                    name={detail.name}
                    price={detail.price}
                    type={detail.type}
                    max={detail.stock}
                    sabores={checkedFlavors}
                    checkedToppings={checkedToppings}
                    contador={contador}
                  />
                  <ButtonComprarB
                    id={detail._id}
                    image={detail.image}
                    name={detail.name}
                    price={detail.price}
                    type={detail.type}
                    max={detail.stock}
                    sabores={checkedFlavors}
                    checkedToppings={checkedToppings}
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
