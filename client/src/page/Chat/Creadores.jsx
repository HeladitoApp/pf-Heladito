import React from 'react';
import { chakra, Box, Flex, Icon, Stack, Center, Image, Link } from "@chakra-ui/react";
import node from '../../assets/Node.js.svg.png';
import mongo from '../../assets/MongoDBpng.png';
import cloudinary from '../../assets/cloudinary.png';
import auth from '../../assets/auth0.png';
import chakraimg from '../../assets/chakra.png';
import react from '../../assets/reactjs.png';
import reduxt from '../../assets/redux-toolkit.png';
import Cris from '../../assets/Cris.png';
import Eze from '../../assets/Eze.png';
import Franco from '../../assets/Franco.png';
import Liza from '../../assets/Liza.png';
import Marcos from '../../assets/Marcos.png';
import Rolando from '../../assets/Rolando.png';
import Santi from '../../assets/Santi.png';
import Sofi from '../../assets/Sofi.png';
import { ImLinkedin2 } from "react-icons/im";



const Creadores = () => {

    const Feature = (props) => {

        return (
            <Flex>
                <Flex shrink={0}>
                 
                </Flex>
                <Box ml={2}>
                    <chakra.dt
                        fontSize="sm"
                        fontWeight="small"
                        lineHeight="6"
                        _light={{ color: "#255a5c" }}
                    >
                        {props.title}
                    </chakra.dt>
                    <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
                        {props.children}
                    </chakra.dd>
                </Box>
            </Flex>
        );
    };
    return (
        <React.Fragment>

            <Stack>         

                <Flex
         
                >
                    <Box py={5} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
                        <Box maxW="6xl" mx="auto" px={{ base: 2, lg: 8 }}>
                            <Box textAlign={{ lg: "center" }}>
                                <chakra.p
                                    mt={2}
                                    fontSize= "x1" 
                                    lineHeight="8"
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                    _light={{ color: "#FF8CD3" }}
                                >
                                    Equipo Full Stack Developers de HeladitosAPP
                                </chakra.p>
                            </Box>

                            <Box mt={1}>
                                <Stack
                                    spacing={{ base: 5, md: 0 }}
                                    display={{ md: "grid" }}
                                    gridTemplateColumns={{ md: "repeat(4,2fr)" }}
                                    gridColumnGap={{ md: 1 }}
                                    gridRowGap={{ md: 1 }}
                                >
                                    <Link href='https://www.linkedin.com/in/cristian-cobo-211365227/' isExternal>
                                        <Feature
                                            title="Cristian Cobo"
                                            icon={<ImLinkedin2 />}
                                        >
                                            <Center>
                                                <Image
                                                    borderRadius='full'
                                                    boxSize='3.375em'
                                                    src={Cris}
                                                    alt='Cris'
                                                />
                                            </Center>
                                        </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/ezequiel-murga-pereyra/' isExternal>
                                        <Feature
                                            title="Ezequiel Murga"
                                            icon={<ImLinkedin2 />}
                                        >
                                            <Center>
                                                <Image
                                                    borderRadius='full'
                                                    boxSize='3.375em'
                                                    src={Eze}
                                                    alt='Ezequiel'
                                                />
                                            </Center>
                                        </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/franco-pelaez-885338249/' isExternal>
                                        <Feature
                                            title="Franco Pelaez"
                                            icon={<ImLinkedin2 />}
                                        >
                                            <Center>
                                                <Image
                                                    borderRadius='full'
                                                    boxSize='3.375em'
                                                    src={Franco}
                                                    alt='Franco'
                                                />
                                            </Center>
                                        </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/lizags/' isExternal>

                                        <Feature
                                            title="Liza García"
                                            icon={<ImLinkedin2 />}
                                        >
                                            <Center>
                                                <Image
                                                    borderRadius='full'
                                                    boxSize='3.375em'
                                                    src={Liza}
                                                    alt='Liza'
                                                />
                                            </Center>
                                        </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/marcos-soria-fullstack/' isExternal>
                                    <Feature
                                        title="Marcos Soria"
                                        icon={<ImLinkedin2 />}
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='3.375em'
                                                src={Marcos}
                                                alt='Marcos'
                                            />
                                        </Center>
                                    </Feature>
                                    </Link>

                                    <Link href='//www.linkedin.com/in/rolando-quispe/' isExternal>
                                    <Feature
                                        title="Rolando Quispe"
                                        icon={<ImLinkedin2 />}
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='3.375em'
                                                src={Rolando}
                                                alt='Rolando'
                                            />
                                        </Center>
                                    </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/santiago-corino-720153b9/' isExternal>
                                    <Feature
                                        title="Santiago Corino"
                                        icon={<ImLinkedin2 />}
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='3.375em'
                                                src={Santi}
                                                alt='Santiago'
                                            />
                                        </Center>
                                    </Feature>
                                    </Link>

                                    <Link href='https://www.linkedin.com/in/navarro-sofiar/' isExternal>
                                    <Feature
                                        title="Sofia Navarro"

                                        icon={<ImLinkedin2 />}
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='3.375em'
                                                src={Sofi}
                                                alt='Sofia'
                                            />
                                        </Center>
                                    </Feature>
                                    </Link>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Flex >
            </Stack>
        </React.Fragment>
    );
}



export default Creadores