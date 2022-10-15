import s from './section.module.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cards/card';
import { getProdsFromDb } from '../../redux/actions/products';
// import { getTypesFromProducts } from '../../redux/actions/types';
import { Divider, Heading  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Section = () => {
  const productos = useSelector((state)=>state.state.productos);
  const types = useSelector((state)=>state.state.types);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProdsFromDb());
    // dispatch(getTypesFromProducts());
  },[dispatch]);
  //console.log(types);  
  return (
    <div className={s.sectionsContainer}>
      {
        types.map((t, index)=>{
          if(productos.filter((p) => p.type === t).length) {
          return (            
            <div key={index}>
              <div className={s.sectionTitle}>
                <Heading>{t[0].toUpperCase()+t.slice(1)}</Heading>
                <h2>Order</h2>
              </div>
              <div>
                <div className={s.sectionContainer}>
                  {                    
                    productos.filter((p)=> p.type === t)
                    ?.map((p)=> {
                        return <Card 
                        key={p._id}
                        id={p._id}
                        img={p.image}
                        name={p.name}
                        price={p.price}
                        />
                    })  
                  }
                </div>
              </div>
              <div>
                <Divider />
              </div>
            </div>
          ) } else {
            return null
          }
        })
      }
    </div>
  )
}

export default Section;
