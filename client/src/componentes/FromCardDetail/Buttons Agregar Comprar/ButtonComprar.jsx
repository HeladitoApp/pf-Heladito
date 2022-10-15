import React from 'react';
import { Button } from '@chakra-ui/react';
import s from './Button.module.css';


const ButtonComprar = () => {
    return (
        <Button className={s.button} w='18.75em' colorScheme='rosado.original' variant='outline'>
            AGREGAR E IR A PAGAR
        </Button>
    )
}

export default ButtonComprar;