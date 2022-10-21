import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductById } from '../../redux/actions/details';
import { useParams } from "react-router-dom";
import BombonesShakesDetail from './BombonesShakesDetail';


export default function CardDetailDos() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.state);
  console.log(product)
  const { productId } = useParams();
  //console.log(productId)

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId]);


  /* if(Object.keys(product).includes('Shake' || 'Bombones')) */
  /* const name = product.find(detail => detail.name) */
  /* if(name.includes('Shake' || 'Bombones')) */


  return (
    <React.Fragment>
      <BombonesShakesDetail />
     
      

       
        
        <h1>hola</h1>
      

    </React.Fragment>
  )
};
