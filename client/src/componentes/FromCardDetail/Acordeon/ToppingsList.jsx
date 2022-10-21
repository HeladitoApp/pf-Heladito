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
    useCheckbox,
    Button,
} from '@chakra-ui/react';
import s from './Lists.module.css';
//import { is } from 'immer/dist/internal';
//import { isDisabled } from '@chakra-ui/utils';


export default function ToppingsList({ checkedToppings, setCheckedToppings }) {


    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch]);

    //const [checkedToppings, setCheckedToppings] = useState([]);

    console.log(checkedToppings)
    console.log(checkedToppings.length)
    const [isChecked, setIsChecked] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [, updateState] = React.useState(); 
    const forceUpdate = React.useCallback(() => updateState({}), []);




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
            } /* else {
                isSelected = !isChecked

            } */
        }
        if (checkedToppings.includes(e.target.value)) {
            setCheckedToppings(
                checkedToppings.filter(el => el !== e.target.value)
            )
        }
        if (checkedToppings.length >= 5) {
            setIsDisabled(!isDisabled)
        }
    }


    /* const handleClick = (e) => {
        e.preventDefault();
        forceUpdate()
    } */



    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige los toppings que deseas
                        </Box>
                        <Button onClick={forceUpdate}>Modificar Toppings</Button>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box fontSize='xs'>Elige max. 6 toppings</Box>
                    <Wrap>
                        {toppings.map((topping, index) => (
                            <WrapItem key={index}>
                                <Checkbox
                                    key={index}
                                    colorScheme='pink'
                                    align="center"
                                    justify="center"
                                    value={topping.name}
                                    onChange={handleChange}
                                    disabled={isDisabled}
                                    checked={isChecked}
                                >
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