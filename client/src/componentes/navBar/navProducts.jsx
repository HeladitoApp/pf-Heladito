import { TabList, Tabs, Center } from "@chakra-ui/react";
import { ProductsCategory } from "../../utils/ProductsCategories";
import ProductSelected from "./productSelected";
import { useDispatch, useSelector } from "react-redux";
import { typeFilter } from "../../redux/actions/typeFilter";
import { useEffect } from "react";
import { getProdsFromDb } from "../../redux/actions/products";

const NavProducts = () => {
    //const [ productosFiltrados ] = useSelector((state) => state.state.productosFiltrados )
    
    useEffect(()=>{
        dispatch(getProdsFromDb());
    },[])

    const dispatch = useDispatch();


    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(typeFilter(e.target.value));
    // }

    return (
        <Center display={{ base: "none", md: "flex" }}>
            <Tabs variant='line' colorScheme='pink'>
                <TabList>
                    {ProductsCategory.map(category => <ProductSelected productCategory={category} /* key={category} value={category} onClick={handleClick} *//>)}
                </TabList>
            </Tabs>
        </Center>
    )
}

export default NavProducts