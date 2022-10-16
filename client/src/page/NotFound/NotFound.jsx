import React from 'react'
import e from "./NotFound.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <div className={e.container}>
            <div className={e.divTitulo}>
                <h3 className={e.titulo}>Página no encontrada</h3>
            </div>
            <div className={e.divTexto}>
                <strong className={e.texto}>La URL que está intentando ingresar no existe</strong>
            </div>
            <div className={e.divBtn}>
                <Button
                borderRadius={'full'} 
                colorScheme='pink' variant='solid'>
                    <a className={e.btn} href='/'>Regresa al Menu Principal</a>
                </Button>
                
            </div>
        </div>
    )
}

export default NotFound