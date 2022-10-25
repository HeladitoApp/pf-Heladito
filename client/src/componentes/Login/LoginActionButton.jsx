import { Button } from "@chakra-ui/react"

const LoginActionButton = ({ name, onClick, color }) => {
    return (
        <Button onClick={onClick} colorScheme={color} minW="7rem">
            {name}
        </Button>
    )
}

export default LoginActionButton