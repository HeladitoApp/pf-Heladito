import { Button } from "@chakra-ui/react"

const LoginActionButton = ({ name, onClick, color }) => {
    return (
        <Button onClick={onClick} colorScheme={color}>
            {name}
        </Button>
    )
}

export default LoginActionButton