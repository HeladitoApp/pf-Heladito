import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductById } from '../../redux/actions/details';
import { useParams } from "react-router-dom";
import BombonesShakesDetail from './BombonesShakesDetail';
import UnSaborConToppings from './UnSaborConToppings';


export default function CardDetailDos() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.state.details);
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
      { Object.keys(product).includes('Shake' || 'Bombones') ?
        product.map((d, index) => (
          <div key={index}>
            <BombonesShakesDetail
              id={d.id}
              image={d.image}
              name={d.name}
              price={d.price}
              description={d.description} />
          </div> 
          
        )) :
        <h1>hola</h1>
       
        
         
      } 

    </React.Fragment>
  )
};
