import s from './Home.module.css';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../componentes/cards/card';
import CarouselPromociones from '../../componentes/carouselPromociones/CarouselPromociones'
import { getProdsFromDb } from '../../redux/actions/products';
// import Section from '../../componentes/section/section'
import Pagination from '../../componentes/Pagination/pagination';
import Order from '../../componentes/section/Order';


const Home = () => {
    const productos = useSelector((state)=>state.state.productos);
    const types = useSelector((state)=>state.state.types);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProdsFromDb());
    },[dispatch]);
    console.log(productos);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(8);
  
    const max = Math.ceil(types.length / perPage);

    return (
        <div>
            <CarouselPromociones/>
            {/* <Pagination page={page} setPage={setPage} max={max}/> */}
            <div className={s.order}>
                <Order />
            </div>
            <div className={s.cardContainer}>                
                {
                    productos
                    ?.slice((page-1) * perPage, (page-1) * perPage + perPage )
                    .map((p)=>{
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
            <Pagination page={page} setPage={setPage} max={max}/>
        </div>
    )
}

export default Home;