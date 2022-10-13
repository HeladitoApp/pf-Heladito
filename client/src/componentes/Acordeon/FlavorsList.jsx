import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlavorsFromDb } from '../../redux/actions/flavors';
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
    Checkbox,
} from '@chakra-ui/react';
import s from './Lists.module.css';

export default function FlavorsList() {

    const flavors = useSelector(state => state.state.flavors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlavorsFromDb());
    }, [dispatch])

    const [sabor, setSabor] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        /* setSabor({
            ...sabor,
            [sabor]: e.target.value,
        }); */
    };

    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige el sabor de tu helado
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Wrap>
                        {flavors.map((flavor, index) => (
                            <WrapItem key={index}>
                                <Checkbox className={s.prueba} align="center" justify="center" w='180px' h='200px' bg='white' value={sabor.name} name='sabor' onClick={handleClick}>
                                    <Image src={flavor.image} alt={'sabor' + flavor.id} />
                                    {flavor.name}
                                </Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};

