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



const AboutUs = () => {

    const Feature = (props) => {

        return (
            <Flex>
                <Flex shrink={0}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        h={12}
                        w={12}
                        rounded="md"
                        _light={{ bg: "#FFCE83" }}
                        color="white"
                    >
                        <Icon
                            boxSize={6}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {props.icon}
                        </Icon>
                    </Flex>
                </Flex>
                <Box ml={4}>
                    <chakra.dt
                        fontSize="lg"
                        fontWeight="medium"
                        lineHeight="6"
                        _light={{ color: "#5CE1E6" }}
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
                    bg="#E9FBFC"
                    _dark={{ bg: "#3e3e3e" }}
                    p={20}
                    w="auto"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
                        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                            <Box textAlign={{ lg: "center" }}>
                                <chakra.p
                                    mt={2}
                                    fontSize={{ base: "3xl", sm: "4xl" }}
                                    lineHeight="8"
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                    _light={{ color: "#FF8CD3" }}
                                >
                                    Tecnologías utilizadas
                                </chakra.p>
                                <chakra.p
                                    mt={10}
                                    maxW="2xl"
                                    fontSize="xl"
                                    mx={{ lg: "auto" }}
                                    color="gray.500"
                                    _dark={{ color: "gray.400" }}
                                >
                                    Frontend
                                </chakra.p>
                            </Box>

                            <Box mt={10}>
                                <Stack
                                    spacing={{ base: 10, md: 0 }}
                                    display={{ md: "grid" }}
                                    gridTemplateColumns={{ md: "repeat(5,1fr)" }}
                                    gridColumnGap={{ md: 8 }}
                                    gridRowGap={{ md: 10 }}
                                >

                                    <Center>
                                        <Image
                                            w='9em'
                                            src={react}
                                            alt='react'
                                        />
                                    </Center>


                                    <Center>
                                        <Image
                                            w='7em'
                                            src={reduxt}
                                            alt='redux toolkit'
                                        />
                                    </Center>

                                    <Center>
                                        <Image
                                            w='9em'
                                            src={chakraimg}
                                            alt='chakra ui'
                                        />
                                    </Center>

                                    <Center>
                                        <Image
                                            w='9em'
                                            src={cloudinary}
                                            alt='cloudinary'
                                        />
                                    </Center>

                                    <Center>
                                        <Image
                                            w='9em'
                                            src={auth}
                                            alt='auth0'
                                        />
                                    </Center>
                                </Stack>
                            </Box>

                            <Box textAlign={{ lg: "center" }}>
                                <chakra.p
                                    mt={10}
                                    maxW="2xl"
                                    fontSize="xl"
                                    mx={{ lg: "auto" }}
                                    color="gray.500"
                                    _dark={{ color: "gray.400" }}
                                >
                                    Backend
                                </chakra.p>
                            </Box>

                            <Box mt={10}>
                                <Stack
                                    spacing={{ base: 10, md: 0 }}
                                    display={{ md: "grid" }}
                                    gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                                    gridColumnGap={{ md: 8 }}
                                    gridRowGap={{ md: 10 }}
                                >
                                    <Center>
                                        <Image
                                            w='9em'
                                            src={node}
                                            alt='node js'
                                        />
                                    </Center>


                                    <Center>
                                        <Image
                                            w='9em'
                                            src={mongo}
                                            alt='mongodb'
                                        />
                                    </Center>
                                </Stack>
                            </Box>

                        </Box>
                    </Box>
                </Flex >

                <Flex
                    bg="#E9FBFC"
                    _dark={{ bg: "#3e3e3e" }}
                    p={20}
                    w="auto"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
                        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                            <Box textAlign={{ lg: "center" }}>
                                <chakra.p
                                    mt={2}
                                    fontSize={{ base: "3xl", sm: "4xl" }}
                                    lineHeight="8"
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                    _light={{ color: "#FF8CD3" }}
                                >
                                    Equipo full stack
                                </chakra.p>
                                <chakra.p
                                    mt={4}
                                    maxW="2xl"
                                    fontSize="xl"
                                    mx={{ lg: "auto" }}
                                    color="gray.500"
                                    _dark={{ color: "gray.400" }}
                                >
                                    Developers de HeladitosAPP
                                </chakra.p>
                            </Box>

                            <Box mt={10}>
                                <Stack
                                    spacing={{ base: 10, md: 0 }}
                                    display={{ md: "grid" }}
                                    gridTemplateColumns={{ md: "repeat(4,2fr)" }}
                                    gridColumnGap={{ md: 8 }}
                                    gridRowGap={{ md: 10 }}
                                >
                                    <Feature
                                        title="Cristian Cobo"
                                        icon={<Link href='https://www.linkedin.com/in/cristian-cobo-211365227/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Cris}
                                                alt='Cris'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Ezequiel Murga"
                                        icon={<Link href='https://www.linkedin.com/in/ezequiel-murga-pereyra/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Eze}
                                                alt='Ezequiel'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Franco Pelaez"
                                        icon={<Link href='https://www.linkedin.com/in/franco-pelaez-885338249/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Franco}
                                                alt='Franco'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Liza García"
                                        icon={<Link href='https://www.linkedin.com/in/lizags/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Liza}
                                                alt='Liza'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Marcos Soria"
                                        icon={<Link href='https://www.linkedin.com/in/marcos-soria-fullstack/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Marcos}
                                                alt='Marcos'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Rolando Quispe"
                                        icon={<Link href='//www.linkedin.com/in/rolando-quispe/' isExternal>
                                            <ImLinkedin2 />
                                        </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Rolando}
                                                alt='Rolando'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Santiago Corino"
                                        icon={
                                            <Link href='https://www.linkedin.com/in/santiago-corino-720153b9/' isExternal>
                                                <ImLinkedin2 />
                                            </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Santi}
                                                alt='Santiago'
                                            />
                                        </Center>
                                    </Feature>

                                    <Feature
                                        title="Sofia Navarro"

                                        icon={
                                            <Link href='https://www.linkedin.com/in/navarro-sofiar/' isExternal>
                                                <ImLinkedin2 />
                                            </Link>
                                        }
                                    >
                                        <Center>
                                            <Image
                                                borderRadius='full'
                                                boxSize='9.375em'
                                                src={Sofi}
                                                alt='Sofia'
                                            />
                                        </Center>
                                    </Feature>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Flex >
            </Stack>
        </React.Fragment>
    );
}



export default AboutUs



