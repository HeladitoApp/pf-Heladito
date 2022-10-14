import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlavorsFromDb } from '../../../redux/actions/flavors';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Wrap,
    WrapItem,
    Image,
    Box,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import s from './Lists.module.css';

export default function FlavorsList() {

    const flavors = useSelector(state => state.state.flavors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlavorsFromDb());
    }, [dispatch])

    const [sabor, setSabor] = React.useState('');
    console.log([sabor, setSabor])

   /*  const handleClick = (e) => {
        e.preventDefault();
        if (sabor.length < 1)
            setSabor({
                ...sabor,
                [sabor]: e.target.value,
            });
    }; */

    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box
                            flex='1'
                            textAlign='left'
                        >
                            Elige el sabor de tu helado
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <RadioGroup onChange={setSabor} value={sabor}>
                        <Wrap>
                            {flavors.map((flavor, index) => (
                                <WrapItem key={index}>
                                    <Radio
                                        className={s.prueba}
                                        align="center"
                                        justify="center"
                                        w='auto'
                                        h='12.5em'
                                        bg='white'
                                        value={flavor.name}
                                        name='sabor'
                                        /* onClick={handleClick} */
                                        cursor='pointer'
                                        /* _checked={{
                                            bg: 'teal.600',
                                            color: 'white',
                                            borderColor: 'teal.600',
                                        }}
                                        _focus={{
                                            boxShadow: 'outline'
                                        }} */
                                        
                                    >
                                        < Image
                                            src={flavor.image}
                                            alt={'sabor' + flavor.id}
                                            
                                        />
                                        {flavor.name}
                                    </Radio>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </RadioGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion >
    )
};

