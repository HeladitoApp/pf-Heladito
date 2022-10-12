import { TabList, Tabs } from "@chakra-ui/react"
import axios from 'axios'

import ProductSelected from "./productSelected"

const { REACT_APP_URL } = process.env

const NavProducts = () => {
    // const productCategory = axios.get(REACT_APP_URL)
    //     .then(response => {
    //         const products = response.data
    //         console.log(products)
    //     })
    //     .catch(e => console.log(e))


    return (
        <Tabs variant='line' color='rosado.original'>
            <TabList>
                <ProductSelected productCategory={'Helados'} />
                <ProductSelected productCategory={'Combos'} />
                <ProductSelected productCategory={'Bombones'} />
                <ProductSelected productCategory={'Shakes'} />
                <ProductSelected productCategory={'Crepes'} />
                <ProductSelected productCategory={'Parfaits'} />
            </TabList>
        </Tabs>
    )
}

export default NavProducts