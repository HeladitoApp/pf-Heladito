import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Icon, Link } from "@chakra-ui/react";
import { FaRegGem, FaShoppingBag } from "react-icons/fa";
import ComprasCliente from "../../componentes/comprasCliente/comprasCliente";

export default function HistoralPedido() {

    return (
        <Box p={10} >
            <Heading color={'rosado.normal'} pb={4} textAlign={'center'}>Historial de pedidos <Icon as={FaShoppingBag} /></Heading>
            
            <ComprasCliente />
            
            <Link href="/login/user/" style={{ textDecoration: 'none'}} pl={20}>
                <Button bg='rosado.normal'  mb="1rem" mt="0.5rem" leftIcon={<ArrowBackIcon />}>
                    Volver
                </Button>
            </Link>
        </Box>
    )
}