import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToppingsFromDb } from '../../redux/actions/toppings';
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

export default function ToppingsList() {

    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch])

    //const [toppings, setToppings] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        /* setToppings({
            ...toppings,
            [topping]: e.target.value,
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
                        {toppings.map((topping, index) => (
                            <WrapItem key={index}>
                                <Checkbox className={s.prueba} align="center" justify="center" w='180px' h='200px' bg='white' value={topping.name} name='sabor' onClick={handleClick}>
                                    <Image src={topping.image} alt={'sabor' + topping.id} />
                                    {topping.name}
                                </Checkbox>
                            </WrapItem>
                        ))}
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};