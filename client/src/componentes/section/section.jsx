import s from './section.module.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cards/card';
import { getProdsFromDb } from '../../redux/actions/products';
// import { getTypesFromProducts } from '../../redux/actions/types';
import { Divider, Heading, Select  } from '@chakra-ui/react'
// import { Link } from 'react-router-dom';
// import { priceSort } from '../../redux/actions/order';
import Pagination from '../Pagination/pagination';
import Order from './Order';


const Section = () => {
  const productos = useSelector((state)=>state.state.productos);
  const types = useSelector((state)=>state.state.types);
  
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProdsFromDb());
    // dispatch(getTypesFromProducts());
  },[dispatch]);

  

  return (
    <div className={s.sectionsContainer}>
      {
        types.map((t, index)=>{
          /* Esto es de Pagination */
          const max = Math.ceil(productos.filter((p) => p.type === t).length / perPage);
          if(productos.filter((p) => p.type === t).length) {
          return (            
            <div key={index}>
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
          ) } else {
            return null
          }
        })
      }
    </div>
  )
}

export default Section;
