import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, StackDivider, useDisclosure, VStack } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { IoMdMenu } from 'react-icons/io';
//import { ProductsCategory } from "../../utils/ProductsCategories";
import { useNavigate } from "react-router-dom";
import { getProdsFromDb } from "../../redux/actions/products";
import { typeFilter } from "../../redux/actions/typeFilter";

const NavProductsMobile = ({setPage, page}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const types = useSelector((state)=>state.state.types)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
        dispatch(getProdsFromDb());
        setPage(1);
        console.log(e.target.value.toLowerCase());
    }

    const handleClickType = (e) => {
        e.preventDefault();
        navigate(`/products/${e.target.value}`);
        dispatch(typeFilter(e.target.value.toLowerCase()));
        setPage(1);
        console.log(e.target.value.toLowerCase());
    }

    return (
        <>
            <Button 
                display={{ base: "flex", md: "none" }}
                ref={btnRef} variant={'ghost'} colorScheme='pink' onClick={onOpen} >
                <IoMdMenu size="26px" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                display={{ base: "flex", md: "none" }}
                alignItems="left"

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Nuestros Productos</DrawerHeader>

                    <VStack
                        spacing={4}
                        divider={<StackDivider borderColor='gray.100' />}
                    >
                    </VStack>

                    <VStack
                        spacing={4}
                        divider={<StackDivider borderColor='gray.100' />}
                    >
                        <Button key="todoslosproductos" variant='ghost' colorScheme='pink' onClick={(e)=>handleClick(e)}>Todos los productos</Button>
                        {types.map((category) => <Button key={category} value={category} variant='ghost' colorScheme='pink' onClick={(e)=>handleClickType(e)}>{category[0].toUpperCase()+category.slice(1)}</Button>)}
                    </VStack>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavProductsMobile