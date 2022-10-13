import { TabList, Tabs, Center } from "@chakra-ui/react"
import { ProductsCategory } from "../../utils/ProductsCategories"


import ProductSelected from "./productSelected"

const NavProducts = () => {

    return (
        <Center display={{ base: "none", md: "flex" }}>
            <Tabs variant='line' colorScheme='pink'>
                <TabList>
                    {ProductsCategory.map(category => <ProductSelected productCategory={category} key={category} />)}
                </TabList>
            </Tabs>
        </Center>
    )
}

export default NavProducts