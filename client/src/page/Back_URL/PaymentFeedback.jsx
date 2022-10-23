import { chakra, Box, Button, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Stack, Text, Divider, Textarea, InputGroup, InputLeftAddon, FormHelperText, Slider, SliderMark, SliderFilledTrack, Tooltip, SliderThumb, SliderTrack, Flex, Checkbox } from '@chakra-ui/react'
import React, { useState } from 'react'

const PaymentFeedback = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    return (
    <Box bg="#EBFBFC" _dark={{ bg: "#111" }} p={10}>
        <Divider
        my="5"
        borderColor="gray.300"
        _dark={{ borderColor: "whiteAlpha.300" }}
        visibility={{ base: "hidden", sm: "visible" }}
        />
    <Box mt={[10, 0]}>
      <SimpleGrid
        display={{ base: "initial", md: "grid" }}
        columns={{ md: 3 }}
        spacing={{ md: 6 }}
      >
        <GridItem colSpan={{ md: 1 }}>
          <Box px={[4, 0]}>
            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
              Formulario de feedback
            </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              Muchas gracias por darnos tu opinión. En HeladitosApp queremos que cada cliente tenga una experiencia única, y eso lo hacemos escuchandoté. Te esperamos la próxima!
            </Text>
          </Box>
        </GridItem>
        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
          <chakra.form
            // onSubmit={e => handleSubmit(e)}
            method="POST"
            shadow="base"
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg="white"
              _dark={{ bg: "#141517" }}
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    htmlFor="name"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}
                  >
                    ¿Pudiste conseguir los productos que buscabas?
                  </FormLabel>
                  <Select
                    id="selectTipo"  
                    defaultValue={'plaseholder'} 
                    // onChange = {e => handleSelectType(e)}
                    mt={1}
                    focusBorderColor="#5CE1E6"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    className="error"
                  >
                    <option hidden value='plaseholder'>Elige uno</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                  </Select>
                </FormControl>
    
                
    
                <FormControl as={GridItem} colSpan={[6, 4]}>
                        <FormLabel
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          Del 1 al 5, ¿Cómo puntuarías tu experiencia general en HeladitosApp?
                        </FormLabel>
                        <Slider
                            id='slider'
                            defaultValue={1}
                            min={1}
                            max={5}
                            colorScheme='teal'
                            onChange={(v) => setSliderValue(v)}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            step={1}
                            >
                            <SliderMark value={1} mt='1' ml='-15.5' fontSize='xs'>
                                Muy mala
                            </SliderMark>
                            <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
                                
                            </SliderMark>
                            <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
                                
                            </SliderMark>
                            <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
                                
                            </SliderMark>
                            <SliderMark value={5} mt='1' ml='-25.5' fontSize='xs'>
                                Excelente
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg='teal.500'
                                color='white'
                                placement='top'
                                isOpen={showTooltip}
                                label={`${sliderValue}`}
                            >
                                <SliderThumb />
                            </Tooltip>
                            </Slider>
                </FormControl>
    
                <FormControl as={GridItem} colSpan={[6, 4]} mt="0.8rem">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          ¿Cuáles de estos aspectos son los que más valoras? Podés elegir más de uno.
                        </FormLabel>
                        <InputGroup size="sm">
                        <chakra.fieldset>
                            <Stack mt={1} spacing={1.5}>
                                <Flex alignItems="start">
                                <Flex alignItems="center" h={5}>
                                    <Checkbox colorScheme="brand" id="comments" rounded="md" />
                                </Flex>
                                <Box ml={3} fontSize="sm">
                                    <chakra.label
                                    htmlFor="comments"
                                    fontWeight="md"
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.50",
                                    }}
                                    >
                                    Comments
                                    </chakra.label>
                                </Box>
                                </Flex>
                                <Flex alignItems="start">
                                <Flex alignItems="center" h={5}>
                                    <Checkbox
                                    colorScheme="brand"
                                    id="candidates"
                                    rounded="md"
                                    />
                                </Flex>
                                <Box ml={3} fontSize="sm">
                                    <chakra.label
                                    htmlFor="candidates"
                                    fontWeight="md"
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.50",
                                    }}
                                    >
                                    Candidates
                                    </chakra.label>                                    
                                </Box>
                                </Flex>
                                <Flex alignItems="start">
                                <Flex alignItems="center" h={5}>
                                    <Checkbox colorScheme="brand" id="offers" rounded="md" />
                                </Flex>
                                <Box ml={3} fontSize="sm">
                                    <chakra.label
                                    htmlFor="offers"
                                    fontWeight="md"
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.50",
                                    }}
                                    >
                                    Offers
                                    </chakra.label>                                    
                                </Box>
                                </Flex>
                            </Stack>
                            </chakra.fieldset>
                        </InputGroup>
                      </FormControl>
    
                    <FormControl as={GridItem} colSpan={[6, 4]}>
                        <FormLabel
                          fontSize="sm"
                          fontWeight="md"
                          color="gray.700"
                          _dark={{ color: "gray.50" }}
                        >
                          Comentarios adicionales
                        </FormLabel>
                        <Textarea
                          type="text"
                        //   value={input.description} 
                          name = 'description'
                        //   onChange={(e) => handleInputsChange(e)}
                          mt={1}
                          rows={3}
                          shadow="sm"
                          focusBorderColor= "#5CE1E6"
                          fontSize={{ sm: "sm" }}
                          className="error"
                        />
                        {/* {errors.description && ( <p className="error">{errors.description}</p>)} */}
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box
              px={{ base: 4, sm: 6 }}
              py={3}
              bg="gray.50"
              _dark={{ bg: "#121212" }}
              textAlign="right"
            >
              <Button
                // borderRadius={'full'} 
                variant='solid'
                type="submit"
                colorScheme="blue"
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Enviar feedback
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>

    <Divider
      my="5"
      borderColor="gray.300"
      _dark={{ borderColor: "whiteAlpha.300" }}
      visibility={{ base: "hidden", sm: "visible" }}
    />
        <a  href='/'><Button
        //   borderRadius={'full'} 
          colorScheme='pink' variant='solid' /* bg="rosado.normal" */>
              Ir al inicio
        </Button></a>
    </Box>
  )
}

export default PaymentFeedback
