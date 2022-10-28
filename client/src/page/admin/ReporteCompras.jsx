import { Box, Button, FormLabel, Heading, Input, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import { reporteCompras } from "../../redux/actions/reporteCompras";

export default function ReporteCompras() {
    const [fechaInicio, setfechaInicio] = useState()
    const [fechaFinal, setfechaFinal] = useState()
    const dispatch = useDispatch()
    function ActualizarFechas(e, type) {
        const fecha = e.target.value;
        if (type === "inicio") {
            setfechaInicio(fecha)
        } else {
            setfechaFinal(fecha)
        }
    }

    function GenerarReporte() {
        if (!fechaInicio || !fechaFinal) {
            swal({
                title: 'Porfavor, Digite los campos que faltan',
                icon: "error",
                button: "aceptar"
            })
        } else if (fechaInicio > fechaFinal) {
            swal({
                title: 'La fecha inicial no puede ser mayor a la final',
                icon: "error",
                button: "aceptar"
            })
        } else {
            const fechas = { fechaInicio, fechaFinal }
            // swal({
            //     title: 'Reporte generado, por favor espere unos segundos',
            //     icon: "success",
            //     button: "aceptar"
            // })
            dispatch(reporteCompras(fechas))
        }

    }
    return (
        <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Box as="main" p="10">
                    <Box p={4} border={'1px'} borderRadius={'10px'} bg={'#99ECEF'}>
                        <Stack>
                            <Heading textAlign={'center'} pb={4}>Reporte de compras</Heading>
                            <Wrap spacing='20px'>
                                <WrapItem>
                                    <FormLabel>Fecha de inicio: </FormLabel>
                                    <Input type={'date'} w={'250px'} onChange={(e) => { ActualizarFechas(e, "inicio") }} />
                                </WrapItem>
                                <WrapItem>
                                    <FormLabel>Fecha de final: </FormLabel>
                                    <Input type={'date'} w={'250px'} onChange={(e) => { ActualizarFechas(e, "final") }} />
                                </WrapItem>
                                <Button onClick={() => GenerarReporte()} colorScheme='pink'>Generar reporte</Button>
                            </Wrap>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}