import { Box, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Chart from "react-apexcharts";
import colors from "../../theme/colors";

const BarChart = ({ title,data}) => {

    const dispatch = useDispatch();
    const types = useSelector((state) => state.state.types)
    const cantCompras = useSelector(state => state.state.cantCompras);
    

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: types,
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ],
        colors: [colors.rosado.original]

    })

    const [series, setSeries] = useState([])
    useEffect(() => {
     /* setSeries([data]) */
    
    }) 

    return (
        <Stack my={3} boxShadow='dark-lg' p={15}>
            <Text
                fontSize='xl'
                as='b'
                align={'center'}
            >
                {title}
            </Text>
            <Chart options={options} series={[data]} type={'bar'} width='150%' align='center'
                height='100%' />
        </Stack>
    )
}

export default BarChart