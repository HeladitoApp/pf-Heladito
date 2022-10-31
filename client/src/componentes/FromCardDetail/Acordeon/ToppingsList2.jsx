import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToppingsFromDb } from '../../../redux/actions/toppings';
import swal from 'sweetalert';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Wrap,
    Image,
    Box,

} from '@chakra-ui/react';
import s from './Lists.module.css';
//import { is } from 'immer/dist/internal';
//import { isDisabled } from '@chakra-ui/utils';


export default function ToppingsList2({ checkedToppings2, setCheckedToppings2 }) {


    const toppings = useSelector(state => state.state.toppings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToppingsFromDb());
    }, [dispatch]);

    //const [checkedToppings, setCheckedToppings] = useState([]);

    const [isChecked, setIsChecked] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);




    const handleChange = (e) => {

        const limit = 6
        let isSelected = e.target.checked


        // e.preventDefault();
        // if (isSelected) {
        //     if (checkedToppings.length < limit) {
        //         setCheckedToppings([
        //             ...checkedToppings,
        //             e.target.value
        //         ])


        //     } 
        // }
        // if (checkedToppings.includes(e.target.value)) {
        //     setCheckedToppings(
        //         checkedToppings.filter(el => el !== e.target.value)
        //     )


        // }
        // if (checkedToppings.length >= 5) {
        //     setIsDisabled(!isDisabled)
        //     return
        // }
        // setIsChecked(!isChecked)


        if (isSelected) {
            if (checkedToppings2.length < limit) {
                setCheckedToppings2((prev) => [...prev, e.target.value]);
            } else {
                e.target.checked = false;
                swal({
                    title: `Solo puede seleccionar ${limit} toppings como máximo`,
                    icon: "info",
                    button: "aceptar"
                })
               /*  alert(`You can select only ${limit} toppings from the given group`); */
            }
        } else {
            let newArr = checkedToppings2.filter((d) => d !== e.target.value);
            setCheckedToppings2(newArr);
        }



    }



    // const handleClick = (e) => {
    //     setCheckedToppings([])
    //     setIsDisabled(!isDisabled)
    // }



    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige los toppings que deseas para el segundo 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box fontSize='xs'>Elige max. 6 toppings</Box>
                    {/* <Button onClick={handleClick}>Modificar Toppings</Button> */}
                    <Wrap>
                        {toppings.map((topping, index) => (
                            <Box key={index}>
                                <label>
                                <input
                                    type="checkbox"
                                    name={topping.name}
                                    value={topping.name}
                                    onChange={handleChange}
                                    align="center"
                                    justify="center"
                                    color='pink'
                                // colorScheme='pink'
                                />

                                
                                    <Image src={topping.image} alt={'sabor' + topping.id} />
                                    {topping.name}
                                </label>
                            </Box>
                            // <Checkbox
                            //     key={index}
                            //     colorScheme='pink'
                            //     align="center"
                            //     justify="center"
                            //     name={topping.name}
                            //     value={topping.name}
                            //     onChange={handleChange}
                            // >
                            //     <Image src={topping.image} alt={'sabor' + topping.id} />
                            //     {topping.name}
                            // </Checkbox>

                        ))}
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};