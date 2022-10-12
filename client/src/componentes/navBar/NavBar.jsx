import { Flex, chakra } from '@chakra-ui/react'

import NavProducts from './navProducts'
import NavProductsMobile from './NavProductsMobile'

const NavBar = () => {
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <NavProductsMobile />
                <NavProducts />

            </Flex>
        </chakra.header>
    )
}

export default NavBar