import { Flex, chakra } from '@chakra-ui/react'
import NavInferior from './navInferior'

import NavSuperior from './navSuperior'


const NavBar = ({setPage, page}) => {
    return (
        <chakra.header id="header">
            
            <Flex
             flexDirection ="column">
                <NavSuperior setPage={setPage} page={page}/>
                <hr />
                <NavInferior setPage={setPage} page={page}/>
            </Flex>
        </chakra.header>
    )
}

export default NavBar