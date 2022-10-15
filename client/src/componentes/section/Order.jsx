import React from 'react'
import { Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { priceSort } from '../../redux/actions/order';


const Order = () => {
    
    const dispatch = useDispatch();

    const handleSelect = (e) => {
        e.preventDefault();
        dispatch(priceSort(e.target.value));
        e.target.value="default";
    }
    
    return (
    <div>
        <Select placeholder='Ordenar' /* onChange={handleSelect} */ > {/* <---- hay que arreglar */}
            <option value='default'>Más relevantes</option>
            <option value='ascendente'>Menor precio</option>
            <option value='descendente'>Mayor precio</option>
        </Select>
    </div>
  )
}

export default Order;
