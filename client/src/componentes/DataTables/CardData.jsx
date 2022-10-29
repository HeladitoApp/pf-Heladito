import { Box, Container, Flex, HStack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, VStack } from "@chakra-ui/react"
import DataText from "../Text/DataText"


const CardData = ({ title, porcentaje, data, icon, periodo }) => {
    return (
        <HStack
            my={1}
            p={1}
            boxShadow='2xl'
            rounded='md'
            justify={"center"}
            align={'center'}
            w={250}
            h={250}
        >
            <Container
                centerContent
                maxW={'xl'}
                maxH={'xl'}
            >
                <Stat border={2} p={1}>
                    <HStack>
                        <StatLabel>
                            {title}
                        </StatLabel>
                        <Flex>
                            {icon}
                        </Flex>
                    </HStack>
                    {/* <HStack gap={1} > */}
                    <StatNumber
                        color={'rosado.original'}
                    >
                        {data}
                    </StatNumber>
                    {porcentaje ?
                        <StatHelpText>
                            <StatArrow
                                type={porcentaje >= 0 ? "increase" : "decrease"}
                            />
                            {`${porcentaje}%`}
                        </StatHelpText> : ''}
                    {/* </HStack> */}
                    <StatHelpText>
                        {`Con respecto ${periodo}`}
                    </StatHelpText>
                </Stat>
            </Container>
        </HStack>
    )
}

export default CardData