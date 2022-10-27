import React from 'react';
import { GoDash, GoPlus } from "react-icons/go";
import { Box, HStack } from '@chakra-ui/react'

export default function Contador({ contador, setContador, max }) {


    const incrementar = () => {
        if (contador <= max)
            setContador(contador + 1);
    };

    const decrementar = () => {
        if (contador >= 1)
            setContador(contador - 1);
    };

    return (
        <HStack spacing='24px' h='40px'>
            <Box>
                <button onClick={decrementar}><GoDash /></button>
            </Box>
            <Box>
                <div>{contador}</div>
            </Box>
            <Box>
                <button onClick={incrementar}><GoPlus /></button>
            </Box>
        </HStack>
    )
};


