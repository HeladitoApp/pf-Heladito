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

    let [checkedToppings, setCheckedToppings] = React.useState([]);
    /* checkedToppings = checkedToppings <= 6 */
    console.log([checkedToppings, setCheckedToppings])
    console.log(checkedToppings)
    console.log(checkedToppings.length)
    



   /*  const handleChecked = (e) => {
        e.preventDefault();
        if (checkedToppings.lenght <= 6)
            setCheckedToppings({
                ...checkedToppings,
                checkedToppings: [...checkedToppings, e.target.value]
            })
    } */




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
                                    onChange={e  => (e.target.checked) ?
                                        setCheckedToppings( 
                                         [...checkedToppings, e.target.value]):
                                         setCheckedToppings([
                                            ...checkedToppings,        
                                            checkedToppings.filter((e) => e !== checkedToppings)]
                                         ) /* handleChecked(e) */}

                                    className={s.prueba}
                                    align="center"
                                    justify="center"
                                    /* w='11.25em' */
                                    w='auto'
                                    h='12.5em'
                                    bg='white'
                                    value={topping.name}
                                    name='topping'
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