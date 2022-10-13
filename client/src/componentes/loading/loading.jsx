import React from "react";
import logotipo from "../../assets/Logotipo tienda helados.png";
import { Spinner } from '@chakra-ui/react';
import l from "../loading/loading.module.css";


export default function Loading() {
    return (
        <div className={l.divPadre}>
         <div className={l.divHijo}>
            <div>
                <img className={l.logo} src={logotipo}/>
            </div>
            <div>
                <Spinner 
                className={l.spinner}
                thickness='4px'
                speed='0.65s'
                emptyColor='celeste.claro'
                color='rosado.original'
                size='xl'
                />
            </div>
         </div>
        </div>
    );
}







/* 

const [loading ,setLoading] = useState(false);

const onLoading= () => {
    setLoading(false);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
};


if(loading){
    return(
        <Loading/>
    )
}
else {
    return  ACA IRIA LO QUE CORRESPONDE AL COMPONENTE DODNE SE QUIERE UTILIZAR 
} 

*/
