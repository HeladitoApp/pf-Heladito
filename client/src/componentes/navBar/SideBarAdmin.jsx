import logo from '../../assets/Logotipo tienda helados.png';
import {
    Avatar,
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Text,
    useDisclosure,
    Image,
    Button,
    chakra
} from "@chakra-ui/react";
import { FaBell, FaCartArrowDown, FaCartPlus, FaUsers } from "react-icons/fa";
import { AiOutlineInbox } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiBarChartFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { MdLock } from "react-icons/md";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';
import avatar from '../../assets/usuario.png'




const SideBarAdmin = () => {

    const { logout } = useAuth0()
    const handleLogout = () => logout({ returnTo: window.location.origin })

    const { user, isLoading } = useAuth0();
    const { picture, name } = user;


    const sidebar = useDisclosure();

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;

        if (isLoading) {
            return (
                <Loading />
            )
        }
        else {
            return (
                <Flex
                    align="center"
                    px="4"
                    mx="2"
                    rounded="md"
                    py="3"
                    cursor="pointer"
                    color="whiteAlpha.700"
                    _hover={{
                        bg: "blackAlpha.300",
                        color: "whiteAlpha.900",
                    }}
                    role="group"
                    fontWeight="semibold"
                    transition=".15s ease"
                    {...rest}
                >
                    {icon && (
                        <Icon
                            mr="2"
                            boxSize="4"
                            _groupHover={{
                                color: "gray.300",
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            );
        }
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="#FF8CD3"
            borderColor="blackAlpha.300"
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <chakra.a
                    href="/"
                    title="Choc Home Page"
                    display="flex"
                    alignItems="center"
                >
                    <Image src={logo} alt='HeladitosApp' w='3.125em' />
                </chakra.a>
                <Text fontSize="xl" ml="2" color="white" fontWeight="semibold">
                    Heladitos App
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <Link to={'/admin'}>
                    <NavItem icon={MdHome}>Main Dashboard</NavItem>
                </Link>

                <Link to={'/admin/perfil'}>
                    <NavItem icon={BsGearFill}>Config. Perfil</NavItem>
                </Link>

                <Link to={'/admin/crear_producto'}>
                    <NavItem icon={FaCartPlus}>Crear Producto</NavItem>
                </Link>

                <Link to={'/admin/modificar_producto'}>
                    <NavItem icon={FaCartArrowDown}>Modificar Producto</NavItem>
                </Link>

                <Link to={'/admin/modificar_toppings'}>
                    <NavItem icon={FaCartArrowDown}>Modificar Toppings</NavItem>
                </Link>

                <Link to={'/admin/clientes'}>
                    <NavItem icon={FaUsers}>Clientes</NavItem>
                </Link>

                <Link to={'/admin/tabla_de_datos'}>
                    <NavItem icon={RiBarChartFill}>tablas de Datos</NavItem>
                </Link>

                <NavItem icon={MdLock} name={'Log Out'} onClick={handleLogout} >Log Out</NavItem>


            </Flex >
        </Box >
    );

    if (isLoading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <React.Fragment>
                {/* <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh"> */}
                <SidebarContent display={{ base: "none", md: "unset" }} />
                <Drawer
                    isOpen={sidebar.isOpen}
                    onClose={sidebar.onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none" />
                    </DrawerContent>
                </Drawer>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Flex
                        as="header"
                        align="center"
                        justify="right"
                        w="full"
                        px="4"
                        bg="white"
                        _dark={{ bg: "gray.800" }}
                        borderBottomWidth="1px"
                        borderColor="blackAlpha.300"
                        h="14"
                    >
                        <IconButton
                            aria-label="Menu"
                            display={{ base: "inline-flex", md: "none" }}
                            onClick={sidebar.onOpen}
                            icon={<FiMenu />}
                            bg='#FFE5F5'
                            size="sm"
                        />

                        {/* <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                        <InputLeftElement color="gray.500">
                            <FiSearch />
                        </InputLeftElement>
                        <Input placeholder="Search for articles..." />
                    </InputGroup> */}

                        <Flex align="center">
                            <Button
                                variant="gost"
                                //color='#ff66c4'
                                leftIcon={<AiOutlineInbox />}
                                size="sm"
                            >
                                Inbox
                            </Button>
                            <Icon color="#FFBD59" as={FaBell} cursor="pointer" mr='1.2em' ml='1' />
                            <Box>
                                <Flex
                                    direction='column'>
                                    <Text>Hola</Text>
                                    <Text fontWeight="semibold">{name}!</Text>
                                </Flex>
                            </Box>
                            <Avatar
                                ml="4"
                                size="sm"
                                name="anubra266"
                                src={picture ? picture : avatar}
                                alt={name}
                                cursor="pointer"
                            />
                        </Flex>
                    </Flex>

                    {/* <Box as="main" p="4">
                    
                    Add content here, remove div below 
                    <AdminHome />

                    <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
                </Box> */}
                </Box>
                {/* </Box> */}
            </React.Fragment>
        );
    };
};
export default SideBarAdmin;