import {
  Container,
  Box,
  chakra,
  Flex,
  Text,
  Stack,
  Avatar,
  SimpleGrid,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../componentes/loading/loading';
import Pagination from '../../componentes/Pagination/pagination';
import { getAllFeedbacks } from '../../redux/actions/getAllFeedbacks';
import { setLoading } from '../../redux/actions/loading';




const Reviews = () => {

  const testimonials = useSelector((state) => state.state.feedbacks);
  const loading = useSelector((state) => state.state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedbacks());
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  const [pageReview, setPageReview] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const max = Math.ceil(testimonials.length / perPage);

  const fondo = useColorModeValue('#E9FBFC', 'gray.600')

  if (loading) {
    return (
      <Loading />
    )
  }
  else {

    return (
      <Container maxW="5xl" py={10} px={6} bg={fondo}>
        <Flex justify="center" mb={8}>
          <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} textAlign="center" color='#ff66c4'>
            Lo que la gente anda diciendo de nosotros
          </chakra.h3>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={1} mt={12} mb={4}>
          {testimonials
            ?.slice((pageReview - 1) * perPage, (pageReview - 1) * perPage + perPage)
            .map((obj, index) => (
              <Stack
                key={index}
                direction={{ base: 'column', sm: 'row' }}
                spacing={2}
                mb={5}
                justify="center"
              >
                <Stack
                  w="345px"
                  boxShadow="lg"
                  rounded="md"
                  p={6}
                  pos="relative"
                  bg="#FFF7EA"
                  _after={{
                    content: `""`,
                    w: '0',
                    h: '0',
                    borderColor: `transparent '#1a202c'`,
                    borderStyle: 'solid',
                    borderWidth: '10px 0 10px 10px',
                    position: 'absolute',
                    top: { base: 'unset', sm: '45%' },
                    right: { base: 'unset', sm: '-10px' },
                    left: { base: '48%', sm: 'unset' },
                    bottom: { base: '-15px', sm: 'unset' },
                    transform: { base: 'rotate(90deg)', sm: 'unset' },
                    display: 'block'
                  }}
                >
                  <Text fontWeight="medium" fontSize="sm">
                    {obj.descripcion}
                  </Text>
                </Stack>
                <Stack direction="column" spacing={2} p={2} justify="flex-end" alignItems="center">
                  <Avatar
                    size="lg"
                    showBorder={true}
                    borderColor="green.400"
                    name="avatar"
                    src={obj.picture}
                  />
                  <Box textAlign="center">
                    <Center>
                      <Text fontWeight="bold" fontSize="xs" w="150px">
                        {obj.nombre}
                      </Text>
                    </Center>
                  </Box>
                </Stack>
              </Stack>
            ))}
        </SimpleGrid>
        <Pagination page={pageReview} setPage={setPageReview} max={max} />
      </Container>
    );
  }
};

export default Reviews;