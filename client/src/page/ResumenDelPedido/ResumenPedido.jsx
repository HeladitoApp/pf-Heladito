import React from 'react'
import { Box, Button, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardPedido from '../../componentes/Resumen_pedido/card_pedido';
import { useDispatch, useSelector } from 'react-redux';
import { addCompraDb } from '../../redux/actions/compras';
import { addPayment } from '../../redux/actions/addPayment';
//import { Link, useNavigate } from "react-router-dom";
import { Link } from '@chakra-ui/react';


const ResumenPedido = () => {
  const [productosCarrito, setproductosCarrito] = useLocalStorage(keyCarrito, []);

  const respuestacompra = useSelector((state) => state.state.respuestacompra)

  const dispatch = useDispatch()

  let total = 0;
  productosCarrito.map(p => total = (p.price * p.cantidad) + total)
  const Total = total.toFixed(2)

  //const navigate = useNavigate();

  function pagar_pedito() {
    const pedido = { usuario: "63507ddf7b0feac8a8829bd4", productos: [], total: 0 }
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
    console.log(pedido)
    dispatch(addCompraDb(pedido))
    dispatch(addPayment(pedido))
    console.log(respuestacompra);
    //navigate(JSON.stringify(respuestacompra))
  }
  return (
    <>
      <Box mx={'auto'} w={'80%'} p={4}>
        <Heading textAlign={'center'}> RESUMEN DE TU PEDIDO </Heading>
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