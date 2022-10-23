import { Box, Image, VStack } from "@chakra-ui/react"
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
    const { user } = useAuth0();
    const { picture, name, email } = user
    return (
        <VStack>
            <Image src={picture} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
            {/* <Box bg={'amarillo.muy_claro'} >
                <pre>
                    {JSON.stringify(user, null, 2)}
                </pre>
            </Box> */}

        </VStack>
    )
}


export default Profile