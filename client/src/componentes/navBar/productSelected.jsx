import { Tab } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { typeFilter } from '../../redux/actions/typeFilter';

const ProductSelected = ({ productCategory }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/products/${e.target.value.toLowerCase()}`);
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