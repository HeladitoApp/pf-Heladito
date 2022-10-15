import { Tab } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { typeFilter } from '../../redux/actions/typeFilter';

const ProductSelected = ({ productCategory }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(typeFilter(e.target.value.toLowerCase()));
        console.log(e.target.value.toLowerCase());
    }
    return (
        <Tab
            // py={4}
            // m={0}
            _focus={{
                boxShadow: "none",
            }}
            value={productCategory} 
            onClick={(e)=>handleClick(e)}
        >
            {productCategory}
        </Tab>
    )
}


export default ProductSelected