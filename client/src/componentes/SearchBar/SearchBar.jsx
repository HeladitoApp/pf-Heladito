import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getProdsFromDbByName } from '../../redux/actions/searchBar';

export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    const navigate = useNavigate();

    function handelInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handelSubmit(e) {
        e.preventDefault()
        console.log(name);
        // navigate("/")
        dispatch(getProdsFromDbByName(name))
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { 
            // navigate("/")
            dispatch(getProdsFromDbByName(name)) 
        }
    };

    return (
        <InputGroup /* size='md' */ mx="5rem" w="20rem">
            <Input
                pr='4.5rem'
                type='text'
                placeholder='Escribe aquí...'
                onChange={ (e) => handelInputChange(e) }
                onKeyDown={handleKeyDown}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handelSubmit} mr="0.4rem" bg="rosado.muy_claro">
                    Buscar
                </Button>
            </InputRightElement>
        </InputGroup>
    )

}
