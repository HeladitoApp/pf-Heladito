
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FcSalesPerformance } from 'react-icons/fc'
import React, { useEffect } from 'react'
import CardData from '../../componentes/DataTables/CardData';
import BarChart from '../../componentes/DataTables/BarChart';

import { getCantCompras } from "../../redux/actions/cantidadCompras";
import { useDispatch, useSelector } from 'react-redux'



const DataTables = () => {
    const dispatch = useDispatch();
const cantCompras = useSelector(state => state.state.cantCompras);

useEffect (() => {
    dispatch(getCantCompras())        
   }, [dispatch]);

   
    const iconBoxInside = useColorModeValue("rosado.original", "rosado.claro")
    const data = {
        name: 'Ventas de hoy',
        data: cantCompras[4]
    
    }
    
   
    const ventasDia = Math.round(cantCompras[3])
    const ventasMes = Math.round(cantCompras[1])
    const pedidosDia = cantCompras[2]
    const pedidosMes = cantCompras[0]
    
    

    let porcentVentD = Math.round((cantCompras[3]-cantCompras[8])*100/cantCompras[8]);
    let porcentVentM = Math.round((cantCompras[1]-cantCompras[6])*100/cantCompras[6])
    let porcentPedD = Math.round((cantCompras[2]-cantCompras[7])*100/cantCompras[7])
    let porcentPedM = Math.round((cantCompras[0]-cantCompras[5])*100/cantCompras[5]) 
    return (
        <Box mx={3} my={1} minH="81vh" >


            <Stack ml={{ base: 0, md: 60 }} transition=".3s ease" >
                <Text
                    fontSize='4xl'
                    as='b'
                    align={'center'}
                    m={4}   
                >
                    Tablas de datos
                </Text>
                <Text
                    fontSize='3xl'
                    as='b'
                    align={'center'}
                    color='celeste.original'
                >
                    Resumen de HeladitosApp
                </Text>

                <Box
                    p={5}
                    gap={10}
                >
                    <Stack
                        spacing={8}
                        direction={{
                            base: 'column',
                            lg: 'row'
                        }}
                        align={'center'}
                        justify={'space-around'}
                        mx={10}
                        my={5}
                    >
                        <CardData
                            title={'Ventas del Dia'}
                            data={`$/ ${ventasDia}`}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={porcentVentD}
                            periodo={'al día anterior'}
                        />
                        <CardData
                            title={'Ventas del Mes'}
                            data={`$/ ${ventasMes}`}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={porcentVentM}
                            periodo={'al mes anterior'}
                        />
                        <CardData
                            title={'Total Pedidos de Hoy'}
                            data={pedidosDia}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={porcentPedD}
                            periodo={'al día anterior'}
                        />
                        <CardData
                            title={'Total Pedidos del Mes'}
                            data={pedidosMes}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={porcentPedM}
                            periodo={'al mes anterior'}
                        />
                    </Stack>
                    <Stack
                        spacing={5}
                        direction={{
                            base: 'column',
                            lg: 'row'
                        }}
                        // align={'center'}
                        justify={'space-around'}
                        my={5}
                    >
                          <BarChart title={'Ventas del día por Categoría'} data={data} />  
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DataTables