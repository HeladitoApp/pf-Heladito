import s from './section.module.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cards/card';
import { getProdsFromDb } from '../../redux/actions/products';
import { Divider, Heading, Select  } from '@chakra-ui/react'
import Pagination from '../Pagination/pagination';
import Order from './Order';


const Section = ({t}) => {
  const productos = useSelector((state)=>state.state.productos);  

  const dispatch = useDispatch();
  useEffect(()=>{
    window.scrollTo(0, 0);
    dispatch(getProdsFromDb());
    // dispatch(getTypesFromProducts());
  },[dispatch]);

  

  return (
    <div className={s.sectionsContainer}>
      {
          /* Esto es de Pagination */
          // const max = Math.ceil(productos.filter((p) => p.type === t).length / perPage);
          productos.filter((p) => p.type === t).length ?
          (            
            <div key={t}>
              <div className={s.sectionTitle}>
                <Heading>{t[0].toUpperCase()+t.slice(1)}</Heading>
                <Order />
              </div>
              <div>
                <div className={s.sectionContainer}>
                  {                    
                    productos.filter((p)=> p.type === t)
                    //.slice((page-1) * perPage, (page-1) * perPage + perPage ) /* <--- De Pagination */
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
                  {/* <Pagination page={page} setPage={setPage} max={max}/> */}
              </div>
              <div>
                <Divider />
              </div>
            </div>
          ) : null
          }
    </div>
  )
}

export default Section;
