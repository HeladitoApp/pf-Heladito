import React from 'react'
import ColumnChart from '../../componentes/DataTables/ColumnChart'
import { Box } from "@chakra-ui/react";


const DataTables = () => {
    return (
        <React.Fragment>
            <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="10">
                        <div>DataTables</div>
                        <ColumnChart />
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default DataTables