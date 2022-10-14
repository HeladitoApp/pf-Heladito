import { Flex, chakra } from '@chakra-ui/react'


import NavProducts from './navProducts'
import NavProductsMobile from './NavProductsMobile'


const NavInferior = () => {
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                align="center"
                justify="center"
            >
                <NavProductsMobile/>
                <NavProducts />

            </Flex>
        </chakra.header>
    )
}

export default NavInferior