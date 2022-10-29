import { Text } from '@chakra-ui/react'


const DataText = ({ title, color, fontWeight, fontSize }) => {
    return (
        <Text fontSize={fontSize} color={color} fontWeight={fontWeight}>
            {title}
        </Text>
    )
}

export default DataText