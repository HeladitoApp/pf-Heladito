import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FcSalesPerformance } from 'react-icons/fc'

import CardData from '../../componentes/DataTables/CardData';
import BarChart from '../../componentes/DataTables/BarChart';

const DataTables = () => {
    const iconBoxInside = useColorModeValue("rosado.original", "rosado.claro")
    const data = {
        name: 'Ventas de hoy',
        data: [580, 540, 470, 448, 430, 400]
    }

    const ventasDia = 100.50
    const ventasMes = 1500.48
    const pedidosDia = 105
    const pedidosMes = 7000

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
                            porcentaje={50}
                            periodo={'al día anterior'}
                        />
                        <CardData
                            title={'Ventas del Mes'}
                            data={`$/ ${ventasMes}`}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={-35}
                            periodo={'al mes anterior'}
                        />
                        <CardData
                            title={'Total Pedidos de Hoy'}
                            data={pedidosDia}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={24}
                            periodo={'al día anterior'}
                        />
                        <CardData
                            title={'Total Pedidos del Mes'}
                            data={pedidosMes}
                            icon={<FcSalesPerformance w={20} h={20} color={iconBoxInside} />}
                            porcentaje={-15}
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