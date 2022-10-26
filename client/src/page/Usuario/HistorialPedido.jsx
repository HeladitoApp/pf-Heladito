import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaRegGem, FaShoppingBag } from "react-icons/fa";
import ComprasCliente from "../../componentes/comprasCliente/comprasCliente";

export default function HistoralPedido() {

    return (
        <Box p={10} >
            <Heading color={'rosado.normal'} pb={4} textAlign={'center'}>Historial de pedidos <Icon as={FaShoppingBag} /></Heading>
            <ComprasCliente />

        </Box>
    )
}