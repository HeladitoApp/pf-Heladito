import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, StackDivider, useDisclosure, VStack } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { IoMdMenu } from 'react-icons/io';
import { ProductsCategory } from "../../utils/ProductsCategories";

const NavProductsMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} variant={'ghost'} colorScheme='pink' onClick={onOpen} >
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
                        {ProductsCategory.map(category => <Button key={category} variant='ghost' colorScheme='pink'>{category}</Button>)}
                    </VStack>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavProductsMobile