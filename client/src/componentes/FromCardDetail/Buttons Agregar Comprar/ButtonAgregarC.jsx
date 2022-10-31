import React from 'react';
import { Button } from '@chakra-ui/react';
import s from './Button.module.css';
import { useLocalStorage, keyCarrito } from '../../../utils/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const ButtonAgregarC = ({ id, image, name, price, type, sabor, contador }) => {

    const [addProduct, setAddProduct] = useLocalStorage(keyCarrito, []);

    const navigate = useNavigate();


    const handleClick = (e) => {
        e.preventDefault();

        const newProduct = {
            id: id,
            img: image,
            name: name,
            price: price,
            type: type,
            cantidad: contador,
            flavors: [sabor],
        }
        console.log(newProduct)
        if (contador === 0 || sabor === ['']) {
            swal({
                title: 'Porfavor, verifique que todas las secciones estén completas',
                icon: "info",
                button: "aceptar"
            })
        }

        else if (id && image &&
            name && price &&
            type && contador &&
            sabor.length > 0) {
            setAddProduct([...addProduct,
                newProduct])
            swal({
                title: 'Producto agregado al carrito, a seguir comprando!',
                icon: "success",
                button: "aceptar"
            })
            navigate("/");
        }
    };



    return (
        <Button className={s.button} w='18.75em' colorScheme='rosado.original' variant='outline'
            onClick={e => handleClick(e)}>
            AGREGAR Y SEGUIR COMPRANDO
        </Button>
    )
}

export default ButtonAgregarC;