import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { VscSettingsGear } from 'react-icons/vsc';

import logotipo from "../../assets/Logotipo tienda helados.png";
import { Flex } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import n from "./navSuperior.module.css";
import Carrito from "../Carrito/Carrito";
import { useDispatch, useSelector } from "react-redux";
import { getProdsFromDb } from "../../redux/actions/products";
import SideBarAdmin from "./SideBarAdmin";
import Profile from "../Login/Profile";
import LoginActionButton from "../Login/LoginActionButton";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../page/login/Login";
import { usuarioByEmail } from "../../redux/actions/getUsuarioByEmail";
import { useEffect } from "react";

const NavSuperior = ({ setPage, page, isOpenM, onOpenM, onCloseM }) => {
    const { user } = useAuth0();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { logout, loginWithRedirect, isLoading, isAuthenticated } = useAuth0()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usuariosss = useSelector((state) => state.state.usuario);
    let usuario = usuariosss[0]?.rol
    const ruta = useLocation();
    const handleLogout = () => {
        logout({ returnTo: window.location.origin })
        onCloseM()
    }

    useEffect( () => {
        dispatch(usuarioByEmail(user?.email))
    }, [dispatch])

    const handleLogin = () => loginWithRedirect()
    
    const handleSingUp = () => loginWithRedirect({ screen_hint: 'signup', })
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getProdsFromDb());
        navigate("/");
        setPage(1);
    }
    
    return (
        (!ruta.pathname.includes('admin')) ?

            <Flex
                className={n.nav}
                w="100%"
                px="6"
                py="1"
                align="center"
                justify="space-evenly"
            >
                <Link to={'/'} onClick={(e) => handleClick(e)}>
                    <img
                        width='65px'
                        src={logotipo} />
                </Link>
                <SearchBar />
                <Flex
                >
                    { usuario === 'usuario' || typeof usuario === "undefined" ?
                        <Link to="/admin" >
                        <IconButton
                        display={"none"}
                            mr="15px"
                            variant="outline"
                            colorScheme='pink'
                            aria-label='carrito'
                            icon={<VscSettingsGear />}
                        />
                    </Link> 
                    :  
                    <Link to="/admin" >
                        <IconButton
                            mr="15px"
                            variant="outline"
                            colorScheme='pink'
                            aria-label='carrito'
                            icon={<VscSettingsGear />}
                        />
                    </Link>}
                    <Link  /* to="/login" */ >
                        <IconButton
                            mr="10px"
                            variant="outline"
                            colorScheme='pink'
                            aria-label='carrito'
                            icon={<AiOutlineUser />}
                            onClick={onOpenM}
                        />
                    </Link>

                    { isAuthenticated ? (<Modal isOpen={isOpenM} onClose={onCloseM}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>HeladitosApp</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Profile />
                            </ModalBody>

                            <ModalFooter display="flex" justifyContent="space-around" alignItems="center" py="2rem">
                                <Link to={`/login/user`} >
                                    <Button colorScheme={'cyan'} onClick={onCloseM} minW="7rem">Ir al perfil</Button>
                                </Link>
                                <LoginActionButton name={'Cerrar sesión'} onClick={handleLogout} color={'brandPrincipal'} />
                            </ModalFooter>
                        </ModalContent>
                    </Modal>) :
                    (<Modal isOpen={isOpenM} onClose={onCloseM}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>HeladitosApp</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text>
                                    Parece que no has iniciado sesión.
                                </Text>                                
                            </ModalBody>

                            <ModalFooter display="flex" justifyContent="space-around" alignItems="center" py="2rem">
                                <LoginActionButton name={'Log In'} onClick={handleLogin} color={'brandSecundario'} />
                                <LoginActionButton name={'Sing Up'} onClick={handleSingUp} color={'brandTerciario'} />
                            </ModalFooter>
                        </ModalContent>
                    </Modal>)
                    }

                    <IconButton
                        onClick={onOpen}
                        variant="outline"
                        colorScheme='pink'
                        aria-label='carrito'
                        icon={<BsHandbag />} />
                    <Carrito isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </Flex>
            </Flex> :

            <SideBarAdmin />

    )
}

export default NavSuperior