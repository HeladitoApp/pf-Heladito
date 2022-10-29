import React from "react";
import logotipo from "../../assets/check.png";
import { Spinner } from '@chakra-ui/react';
import l from "../loading/pagoRealizado.module.css";


export default function PagoRealizado() {
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
                color='#01e41f'
                size='xl'
                />
            </div>
         </div>
        </div>
    );
}

