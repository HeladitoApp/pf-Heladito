import React from 'react'
import e from "./noAutorizado.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

const NoAutorizado = () => {
    return (
        <div className={e.container}>
            <div className={e.divTitulo}>
                <h3 className={e.titulo}>No se puede acceder a la página</h3>
            </div>
            <div className={e.divTexto}>
                <strong className={e.texto}>No cuentas con los permisos necesarios para ingresar</strong>
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

export default NoAutorizado