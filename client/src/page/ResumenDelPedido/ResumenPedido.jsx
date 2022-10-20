import React from 'react'
import { Box, Button, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { keyCarrito, useLocalStorage } from '../../utils/useLocalStorage';
import CardPedido from '../../componentes/Resumen_pedido/card_pedido';
import { useDispatch, useSelector } from 'react-redux';
import { addCompraDb } from '../../redux/actions/compras';

const ResumenPedido = () => {
  const [productosCarrito, setproductosCarrito] = useLocalStorage(keyCarrito, []);
  const dispatch = useDispatch()

  let total = 0;
  productosCarrito.map(p => total = (p.price * p.cantidad) + total)
  const Total = total.toFixed(2)

  function pagar_pedito() {
    const pedido = { productos: [], total: 0 }
    productosCarrito.map(p => (
      pedido.productos.push({
        title: p.name,
        picture_url: p.id,
        quantity: p.cantidad,
        unit_price: p.price
      })
    ))
    pedido.total = Total
    console.log(pedido)
    dispatch(addCompraDb(pedido))

  }
  return (
    <>
      <Box mx={'auto'} w={'80%'} p={4}>
        <Heading textAlign={'center'}> RESUMEN DE TU PEDIDO </Heading>
        <Box>
          {productosCarrito && productosCarrito.map((p, index) => (
            <CardPedido
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