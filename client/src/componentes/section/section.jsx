import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/slices';
import Card from '../cards/card';

const Section = () => {
  const productos = useSelector((state)=>state.state.productos);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductos())
  },[dispatch]);
  console.log(productos);  
  return (
    <div>
      <h3>Título de la sección</h3>
      {/* <Order /> */}
      {
        productos?.map(p=> {
            <Card
            id={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
            />
        })
      }
    </div>
  )
}

export default Section;
