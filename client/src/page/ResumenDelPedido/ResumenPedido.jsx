import React, { useEffect } from 'react'
import { Box, Button, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardPedido from '../../componentes/Resumen_pedido/card_pedido';
import { useDispatch, useSelector } from 'react-redux';
import { addCompraDb } from '../../redux/actions/compras';
import { addPayment } from '../../redux/actions/addPayment';
//import { Link, useNavigate } from "react-router-dom";
import { Link } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { getFlavorsFromDb } from '../../redux/actions/flavors';
import { getToppingsFromDb } from '../../redux/actions/toppings';


const ResumenPedido = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated)
  const [productosCarrito, setproductosCarrito] = useLocalStorage(keyCarrito, []);

  // console.log(user.email)
  const dispatch = useDispatch()

  let total = 0;
  productosCarrito.map(p => total = (p.price * p.cantidad) + total)
  const Total = total.toFixed(2)
  const navigate = useNavigate();

  //const navigate = useNavigate();

  function pagar_pedito() {
    if (isAuthenticated) {
      const pedido = { usuario: "6352c46d07841200112ea78a", productos: [], total: 0 }
      productosCarrito.map(p => (
        pedido.productos.push({
          category_id: p.id,
          title: p.name,
          picture_url: p.img,
          quantity: p.cantidad,
          unit_price: p.price
        })
      ))
      pedido.total = Total
      dispatch(addCompraDb(pedido))
      dispatch(addPayment(pedido))
    } else {
      swal({
        title: 'Porfavor, inicie se sesión para poder comprar ',
        icon: "info",
        button: "aceptar"
      })
      loginWithRedirect()
      // navigate('/')
    }
  }
  useEffect(() => {
    dispatch(getFlavorsFromDb());
    dispatch(getToppingsFromDb());
  }, [dispatch]);
  return (
    <>
      <Box mx={'auto'} w={'80%'} p={4}>
        <Heading textAlign={'center'} color={"rosado.normal"}> RESUMEN DE TU PEDIDO </Heading>
        <Box>
          {productosCarrito && productosCarrito.map((p, index) => (
            <CardPedido
              productosCarrito={productosCarrito}
              setproductosCarrito={setproductosCarrito}
              key={index}
              id={p.id}
              name={p.name}
              img={p.img}
              flavors={p.flavors}
              price={p.price}
              toppings={p.toppings}
              cantidad={p.cantidad}
              type={p.type}
            />
          ))}
        </Box>
        <Box pt={10}>
          <Text p={5}>{productosCarrito.length} Articulos </Text>
          <Flex borderTop={'1px'} borderBottom={'1px'} p={5}>
            <Text>
              TOTAL:
            </Text>
            <Spacer />
            <Text>
              $/{Total}
            </Text>
          </Flex>
          <Box align="right" m={5} >
            <Button onClick={() => pagar_pedito()}> Pagar Compra</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ResumenPedido