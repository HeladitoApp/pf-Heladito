import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToppingsFromDb } from '../../../redux/actions/toppings';
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
import { isDisabled } from '@chakra-ui/utils';

export default function ToppingsList() {

    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();
    



    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch]);

    let [checkedToppings, setCheckedToppings] = React.useState([0, false]);
    console.log([checkedToppings, setCheckedToppings])
    console.log(checkedToppings.length)

    const handleChecked = (e) => {
        e.preventDefault();
        if (checkedToppings.lenght <= 6)
            setCheckedToppings([
                ...checkedToppings, 
                [e.target.checked, e.target.value]
            ])
        /* if (isDisabled(checkedToppings))
            setCheckedToppings([
                ...checkedToppings,
                isChecked(checkedToppings)
            ]) */
    }


    /* const allChecked = checkedToppings.every(Boolean); */

    /* const isIndeterminate = checkedToppings.some(Boolean) && !allChecked */


    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige los toppings que deseas
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Wrap>
                        {toppings.map((topping, index) => (
                            <WrapItem key={index}>
                                <Checkbox
                                    /* isChecked={1} */
                                    /* isIndeterminate={isIndeterminate} */
                                    onChange={/* (e) => setCheckedToppings([...checkedToppings, [e.target.checked, e.target.value]]) */handleChecked}


                                    className={s.prueba}
                                    align="center"
                                    justify="center"
                                    /* w='11.25em' */
                                    w='auto'
                                    h='12.5em'
                                    bg='white'
                                    value={topping.name}
                                    /* name='sabor' */
                                    /* onClick={handleClick} */>
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