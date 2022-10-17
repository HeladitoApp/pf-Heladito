import { Flex, chakra } from '@chakra-ui/react'


import NavProducts from './navProducts'
import NavProductsMobile from './NavProductsMobile'


const NavInferior = ({setPage, page}) => {

    
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                align="center"
                justify="center"
            >
                <NavProductsMobile/>
                <NavProducts setPage={setPage} page={page} />

            </Flex>
        </chakra.header>
    )
}

export default NavInferior