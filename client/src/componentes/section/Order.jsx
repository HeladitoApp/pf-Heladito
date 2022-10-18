import React from 'react'
import { Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { priceSort } from '../../redux/actions/order';


const Order = () => {
    
    const dispatch = useDispatch();

    const handleSelect = (e) => { 
        e.preventDefault();
        dispatch(priceSort(e.target.value));
        console.log(e.target.value);
    };
    
    return (
    <div>
        <Select onChange={handleSelect} > {/* Esto es Order */}
            <option value="default" hidden>Ordenar por precio</option>
            <option value="ascendente">Menor precio</option>
            <option value="descendente">Mayor precio</option>
        </Select>
    </div>
  )
}

export default Order;
