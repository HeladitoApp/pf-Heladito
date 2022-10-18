import { TabList, Tabs, Center, Tab } from "@chakra-ui/react";
import { ProductsCategory } from "../../utils/ProductsCategories";
import ProductSelected from "./productSelected";
import { useDispatch, useSelector } from "react-redux";
import { typeFilter } from "../../redux/actions/typeFilter";
import { useEffect } from "react";
import { getProdsFromDb } from "../../redux/actions/products";
import { useNavigate } from "react-router-dom";

const NavProducts = () => {
    useEffect(()=>{
        dispatch(getProdsFromDb());
    },[])

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
        dispatch(getProdsFromDb());
        console.log(e.target.value.toLowerCase());
    }

    return (
        <Center display={{ base: "none", md: "flex" }}>
            <Tabs variant='line' colorScheme='pink'>
                <TabList>
                    <Tab
                        // py={4}
                        // m={0}
                        _focus={{
                            boxShadow: "none",
                        }}
                        value="Todos los productos" 
                        onClick={(e)=>handleClick(e)}
                    >
                        Todos los productos
                    </Tab>
                    {ProductsCategory.map(category => <ProductSelected productCategory={category} />)}
                </TabList>
            </Tabs>
        </Center>
    )
}

export default NavProducts