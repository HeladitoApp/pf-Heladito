import React from "react";
import logotipo from "../../assets/wrong.png";
import { Spinner } from '@chakra-ui/react';
import l from "../loading/pagoNoRealizado.module.css";


export default function PagoNoRealizado() {
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
                color='#ff0000'
                size='xl'
                />
            </div>
         </div>
        </div>
    );
}