import { Flex, chakra } from '@chakra-ui/react'
import NavInferior from './navInferior'

import NavSuperior from './navSuperior'


const NavBar = () => {
    return (
        <chakra.header id="header">
            
            <Flex
             flexDirection ="column">
                <NavSuperior/>
                <hr />
                <NavInferior/>
            </Flex>
        </chakra.header>
    )
}

export default NavBar