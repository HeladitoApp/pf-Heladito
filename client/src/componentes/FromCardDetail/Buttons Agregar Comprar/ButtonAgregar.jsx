import React from 'react';
import { Button } from '@chakra-ui/react';
import s from './Button.module.css';
import { useLocalStorage, keyCarrito } from '../../../utils/useLocalStorage';
import { wrapHandler } from 'framer-motion';

const ButtonAgregar = ({ id, image, name, price, type }) => {

    const [addProduct, setAddProduct] = useLocalStorage(keyCarrito, []);


    const handleClick = (e) => {
        e.preventDefault();

        const newProduct = {
            id: id,
            img: image,
            name: name,
            price: price,
            type: type,
            cantidad: 1,
            flavors: [],
            toppings: [],
        }
        console.log(newProduct)
        setAddProduct([...addProduct,
            newProduct])

    };


    return (
        <Button className={s.button} w='18.75em' colorScheme='rosado.original' variant='outline'
            onClick={e => handleClick(e)}>
            AGREGAR Y SEGUIR COMPRANDO
        </Button>
    )
}

export default ButtonAgregar;