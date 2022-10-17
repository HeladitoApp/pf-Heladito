import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import Card from '../../componentes/cards/card';
import CarouselPromociones from '../../componentes/carouselPromociones/CarouselPromociones'
import { getProdsFromDb } from '../../redux/actions/products';
import Section from '../../componentes/section/section'


const Home = () => {
    const productos = useSelector((state)=>state.state.productos);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProdsFromDb());
    },[dispatch]);
    console.log(productos);
    return (
        <div>
            <CarouselPromociones/>
            <Section />
        </div>
    )
}

export default Home;