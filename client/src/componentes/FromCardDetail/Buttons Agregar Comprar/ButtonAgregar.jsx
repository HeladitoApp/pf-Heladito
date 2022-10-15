import React from 'react';
import { Button } from '@chakra-ui/react';
import s from './Button.module.css';
import { useLocalStorage } from '../../../utils/useLocalStorage';
import { wrapHandler } from 'framer-motion';

const ButtonAgregar = () => {

    const handleClick = () => {};


    return (
        <Button className={s.button} w='18.75em' colorScheme='rosado.original' variant='outline'
            onClick={e => handleClick(e)}>
            AGREGAR Y SEGUIR COMPRANDO
        </Button>
    )
}

export default ButtonAgregar;