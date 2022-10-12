import { Tab } from '@chakra-ui/react'

const ProductSelected = ({ productCategory }) => {
    return (
        <Tab
            // py={4}
            // m={0}
            _focus={{
                boxShadow: "none",
            }}
        >
            {productCategory}
        </Tab>
    )
}


export default ProductSelected