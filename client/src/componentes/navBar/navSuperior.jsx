import { Link } from "react-router-dom"
import { IconButton } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

import logotipo from "../../assets/Logotipo tienda helados.png";
import { Flex } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import n from "./navSuperior.module.css";

const NavSuperior = () => {

    return (
        <Flex
                className={n.nav}
                w="100%"
                px="6"
                py="1"
                align="center"
                justify="space-evenly"
            >
                <Link to={'/'}>
                    <img 
                    width= '65px'
                     src={logotipo}/>
                </Link>
                <SearchBar/>
                <Flex
                  >
                    <Link >
                        <IconButton
                         mr="10px"
                         variant="outline"
                         colorScheme='pink'
                         aria-label='carrito' 
                         icon={<AiOutlineUser/>} />
                    </Link>
                        <IconButton 
                        variant="outline"
                        colorScheme='pink'
                        aria-label='carrito' 
                        icon={<BsHandbag/>} />
                </Flex>
            </Flex>
        
    )
}

export default NavSuperior