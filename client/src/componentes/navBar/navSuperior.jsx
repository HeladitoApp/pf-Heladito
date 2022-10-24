import { Link, useNavigate } from "react-router-dom"
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { VscSettingsGear } from 'react-icons/vsc';

import logotipo from "../../assets/Logotipo tienda helados.png";
import { Flex } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import n from "./navSuperior.module.css";
import Carrito from "../Carrito/Carrito";

const NavSuperior = ({setPage, page}) => {

const { isOpen, onOpen, onClose } = useDisclosure()
const navigate = useNavigate();

const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    setPage(1);
}

    return (
        <Flex
                className={n.nav}
                w="100%"
                px="6"
                py="1"
                align="center"
                justify="space-evenly"
            >
                <Link to={'/'} onClick={(e)=>handleClick(e)}>
                    <img 
                    width= '65px'
                     src={logotipo}/>
                </Link>
                <SearchBar/>
                <Flex
                  >
                    <Link to="/admin" >
                        <IconButton
                         mr="15px"
                         variant="outline"
                         colorScheme='pink'
                         aria-label='carrito' 
                         icon={<VscSettingsGear/>} />
                    </Link>
                    <Link to="/login">
                        <IconButton
                         mr="10px"
                         variant="outline"
                         colorScheme='pink'
                         aria-label='carrito' 
                         icon={<AiOutlineUser/>} />
                    </Link>
                        <IconButton 
                        onClick={onOpen}
                        variant="outline"
                        colorScheme='pink'
                        aria-label='carrito' 
                        icon={<BsHandbag/>} />
                        <Carrito isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
                </Flex>
            </Flex>
        
    )
}

export default NavSuperior