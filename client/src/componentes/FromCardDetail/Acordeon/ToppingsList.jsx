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
    useCheckbox
} from '@chakra-ui/react';
import s from './Lists.module.css';
//import { isDisabled } from '@chakra-ui/utils';


export default function ToppingsList({props, checkedToppings, setCheckedToppings}) {

    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch]);

    const { getCheckboxProps } = useCheckbox(props)

    //const [checkedToppings, setCheckedToppings] = useState([]);
    /* checkedToppings = checkedToppings <= 6 */
    console.log(checkedToppings)
    console.log(checkedToppings.length)
    const [isChecked, setIsChecked] = useState('false')

    /* checkedToppings.lenght = 7 && isDisabled */



    const handleChange = (e) => {
        e.preventDefault();
        if (checkedToppings.includes(e.target.value)) {
            setCheckedToppings(
                checkedToppings.filter((t) => t !== e.target.value)
            )
        }
        else if (checkedToppings.length <= 5) {
            (e.target.checked = true)
            setCheckedToppings(
                [...checkedToppings, e.target.value])
        }
        else if (!e.target.checked) { 
            setCheckedToppings(...checkedToppings)
        }
        else if(checkedToppings.length > 6){
            setIsChecked(isChecked)
        }
    }

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
                                    onChange={e => handleChange(e)}

                                    className={s.prueba}
                                    align="center"
                                    justify="center"
                                    /* w='11.25em' */
                                    w='auto'
                                    h='12.5em'
                                    bg='white'
                                    value={topping.name}
                                    name='topping'
                                    checked='isChecked'
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