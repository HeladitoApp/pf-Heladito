import { Flex, chakra } from '@chakra-ui/react'
import NavInferior from './navInferior'
import NavSuperior from './navSuperior'
import { useLocation } from 'react-router-dom'
//import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from './SideBarAdmin'


const NavBar = ({ setPage, page }) => {

    const ruta = useLocation();
    console.log(ruta)


    return (
        (!ruta.pathname.includes('admin') ) ?

            <chakra.header id="header">


                <Flex
                    flexDirection="column">
                    <NavSuperior setPage={setPage} page={page} />
                    <hr />
                    <NavInferior setPage={setPage} page={page} />
                </Flex>
            </chakra.header> :
            <SideBarAdmin />

    )
}

export default NavBar