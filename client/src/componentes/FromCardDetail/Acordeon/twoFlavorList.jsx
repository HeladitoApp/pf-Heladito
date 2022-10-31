import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
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
import { getFlavorsFromDb } from '../../../redux/actions/flavors';


export default function TwoFlavorsList({ checkedFlavors, setCheckedFlavors }) {


    const flavors = useSelector(state => state.state.flavors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFlavorsFromDb());
    }, [dispatch]);


    const [isChecked, setIsChecked] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);




    const handleChange = (e) => {

        const limit = 2
        let isSelected = e.target.checked

        if (isSelected) {
            if (checkedFlavors.length < limit) {
                setCheckedFlavors((prev) => [...prev, e.target.value]);
            } else {
                e.target.checked = false;
                swal({
                    title: `Solo puede seleccionar ${limit} sabores como máximo`,
                    icon: "info",
                    button: "aceptar"
                })
            }
        } else {
            let newArr = checkedFlavors.filter((d) => d !== e.target.value);
            setCheckedFlavors(newArr);
        }



    }


    return (
        <Accordion allowToggle>
            <AccordionItem className={s.container}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Elige los sabores que deseas
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box fontSize='xs'>Elige max. 2 sabores</Box>
                    <Wrap>
                        {flavors.map((flavor, index) => (
                            <Box key={index}>
                                <label>
                                <input
                                    type="checkbox"
                                    name={flavor.name}
                                    value={flavor.name}
                                    onChange={handleChange}
                                    align="center"
                                    justify="center"
                                    color='pink'
                                // colorScheme='pink'
                                />

                                
                                    <Image src={flavor.image} alt={'sabor' + flavor.id} />
                                    {flavor.name}
                                </label>
                            </Box>
                        ))}
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};