import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Compra({ productos, usuario, createdAt, sumaTotal, id, pagado, metodoDePago }) {
    return (
        <>
            <Tr>
                <Td>{id}</Td>
                <Td>
                    <Popover>
                        <PopoverTrigger>
                            <Button colorScheme='teal' size='xs'>Productos</Button>
                        </PopoverTrigger>
                        <PopoverContent w={'500px'}>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Productos!</PopoverHeader>
                            <PopoverBody>
                                <TableContainer>
                                    <Table variant='unstyled' size='sm'>
                                        <Thead>
                                            <Tr>
                                                <Th>Nombre</Th>
                                                <Th>Cantidad</Th>
                                                <Th>Precio</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {productos && productos.map(p => (
                                                <Tr>
                                                    <Td fontSize='xs'>{p.name}</Td>
                                                    <Td>{p.quantity}</Td>
                                                    <Td>$/{p.price}</Td>
                                                </Tr>
                                            ))}


                                        </Tbody>
                                    </Table>
                                </TableContainer>

                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Td>
                <Td textAlign={'center'}>{createdAt.split("T")[0]}</Td>
                <Td>{metodoDePago}</Td>
                <Td><Tag variant='subtle' colorScheme={pagado ? 'green' : "red"}>{pagado ? "Pagado" : "Pendiente"}</Tag></Td>
                <Td isNumeric> Precio $/{sumaTotal}</Td>
            </Tr>
        </>
    )
}