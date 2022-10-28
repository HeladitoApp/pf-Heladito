import React, { useEffect } from 'react';
import {
    ButtonGroup,
    Flex,
    IconButton,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Box
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearDetails } from '../../redux/slices';
import { setLoading } from '../../redux/actions/loading';
import Loading from '../../componentes/loading/loading';
import { getToppingsFromDb } from '../../redux/actions/toppings';


const ModifiedExtra = () => {

    const dispatch = useDispatch();
    const toppings = useSelector((state) => state.state.toppings);
    const loading = useSelector((state) => state.state.loading)

    useEffect(() => {
        dispatch(getToppingsFromDb());
        dispatch(setLoading(true));
        window.scrollTo(0, 0);
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
        return () => {
            dispatch(clearDetails())
        }
    }, [dispatch])

    const header = ["id", "nombre", "tipo", "acciones"];
    const data = toppings.map((topping) => {
        return {
            id: topping._id,
            nombre: topping.name,
            tipo: topping.type
        }
    })

    //console.log(data)

    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");

    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <Box as="section" bg="#E9FBFC" _dark={{ bg: "gray.700" }} minH="100vh">
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="10">
                        <Flex
                            w="full"
                            bg="#FFE6C1"
                            _dark={{ bg: "#3e3e3e" }}
                            p={50}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Table
                                w="full"
                                bg="white"
                                _dark={{ bg: "gray.800" }}
                                display={{
                                    base: "block",
                                    md: "table",
                                }}
                                sx={{
                                    "@media print": {
                                        display: "table",
                                    },
                                }}
                            >
                                <Thead
                                    display={{
                                        base: "none",
                                        md: "table-header-group",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "table-header-group",
                                        },
                                    }}
                                >
                                    <Tr>
                                        {header.map((x) => (
                                            <Th key={x}>{x}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody
                                    display={{
                                        base: "block",
                                        lg: "table-row-group",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "table-row-group",
                                        },
                                    }}
                                >
                                    {data.map((token, tid) => {
                                        return (
                                            <Tr
                                                key={tid}
                                                display={{
                                                    base: "grid",
                                                    md: "table-row",
                                                }}
                                                sx={{
                                                    "@media print": {
                                                        display: "table-row",
                                                    },
                                                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                                                    gridGap: "10px",
                                                }}
                                            >
                                                {Object.keys(token).map((x) => {
                                                    return (
                                                        <React.Fragment key={`${tid}${x}`}>
                                                            <Td
                                                                display={{
                                                                    base: "table-cell",
                                                                    md: "none",
                                                                }}
                                                                sx={{
                                                                    "@media print": {
                                                                        display: "none",
                                                                    },
                                                                    textTransform: "uppercase",
                                                                    color: color1,
                                                                    fontSize: "xs",
                                                                    fontWeight: "bold",
                                                                    letterSpacing: "wider",
                                                                    fontFamily: "heading",
                                                                }}
                                                            >
                                                                {x}
                                                            </Td>
                                                            <Td
                                                                color={"gray.500"}
                                                                fontSize="md"
                                                                fontWeight="hairline"
                                                            >
                                                                {token[x]}
                                                            </Td>
                                                        </React.Fragment>
                                                    );
                                                })}
                                                <Td
                                                    display={{
                                                        base: "table-cell",
                                                        md: "none",
                                                    }}
                                                    sx={{
                                                        "@media print": {
                                                            display: "none",
                                                        },
                                                        textTransform: "uppercase",
                                                        color: color2,
                                                        fontSize: "xs",
                                                        fontWeight: "bold",
                                                        letterSpacing: "wider",
                                                        fontFamily: "heading",
                                                    }}
                                                >
                                                    Actions
                                                </Td>
                                                <Td>
                                                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                                                        <Link to={`/admin/modificar_extra/update/${token.id}`}>
                                                            <IconButton
                                                                marginLeft="50%"
                                                                colorScheme="green"
                                                                icon={<AiFillEdit />}
                                                                aria-label="Edit"
                                                            />
                                                        </Link>
                                                    </ButtonGroup>
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        )
    }
}









export default ModifiedExtra