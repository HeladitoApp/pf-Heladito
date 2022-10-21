import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getToppingsFromDb } from '../../../redux/actions/toppings';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Wrap,
    Checkbox,
    Image
} from '@chakra-ui/react';

const Toppings = ({ checkedToppings, setCheckedToppings }) => {

    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch]);


    const [isDisabled, setIsDisabled] = useState(true)



    const handleChange = (e) => {
        
        const limit = 6
        let isSelected = e.target.checked
        

        e.preventDefault();
        if (isSelected) {
            if (checkedToppings.length < limit) {
                setCheckedToppings([
                    ...checkedToppings,
                    e.target.value
                ])
            } else {
                isSelected = false
                
            }
        }
        if (checkedToppings.includes(e.target.value)) {
            setCheckedToppings(
                checkedToppings.filter(el => el !== e.target.value)
            )
        }
        /* else if (checkedToppings.length >= 5) {
            e.target.checked = false
        } */
    }

    console.log(checkedToppings)
    console.log(checkedToppings.length)

    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige los toppings que deseas *
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Wrap /* spacing='1em' */>
                        {toppings.map((topping, index) => (
                            <Checkbox
                                key={index}
                                colorScheme='pink'
                                align="center"
                                justify="center"
                                value={topping.name}
                                onChange={handleChange}
                                checked='false'
                                
                                
                            >
                                {topping.name}
                                <Image src={topping.image} alt={'sabor' + topping.name} />
                            </Checkbox>
                        ))
                        }
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </ Accordion>
    )
}

export default Toppings