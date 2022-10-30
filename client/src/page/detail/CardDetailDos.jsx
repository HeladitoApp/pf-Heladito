import React from 'react';
import { useSelector } from 'react-redux';
import BombonesShakesDetail from './BombonesShakesDetail';
import CardDetail from './CardDetail';


export default function CardDetailDos() {

  const product = useSelector((state) => state.state.details);
  const productname = product.map(e => e.name)
  console.log(productname)



  return (
    productname.includes('piña') ?
      <React.Fragment>
        <BombonesShakesDetail />
      </React.Fragment>
      :
      <React.Fragment>
        <CardDetail />
      </React.Fragment>
  )
};
