import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { traerUsuarios } from '../../redux/actions/getUsuarioByName';
import { IconButton, InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react'
import { ImSearch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";


export default function SearchUsuario() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handelInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handelSubmit(e) {
        e.preventDefault()
        dispatch(traerUsuarios(name))
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { dispatch(traerUsuarios(name)) }
    };

    return (
        <React.Fragment>
            <Flex className="barra" w='31em' p='10'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<AiOutlineUser color='gray.300' />}
                    />
                    <Input type='text'
                        focusBorderColor='#FF8CD3'
                        placeholder='Buscar cliente...'
                        onChange={(e) => handelInputChange(e)}
                        className='input'
                        onKeyDown={handleKeyDown} />
                </InputGroup>
                <IconButton
                    bg='#FF8CD3'
                    color='white'
                    aria-label='Search database'
                    icon={<ImSearch />}
                    id='button'
                    type="submit"
                    onClick={(e) => handelSubmit(e)}
                />
            </Flex>
            {/* <span className="barra">
                <input type="text" placeholder="Buscar usuario..." onChange={(e) => handelInputChange(e)} className='input' onKeyDown={handleKeyDown} />
                <button id='button' type="submit" onClick={(e) => handelSubmit(e)} >Buscar</button>
            </span> */}
        </React.Fragment>

    )


}
