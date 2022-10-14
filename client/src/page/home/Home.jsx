import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import Card from '../../componentes/cards/card';
import CarouselPromociones from '../../componentes/carouselPromociones/CarouselPromociones'
import { getProdsFromDb } from '../../redux/actions/products';
import Section from '../../componentes/section/section'
import SearchBar from '../../componentes/SearchBar/SearchBar';

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
            {/* {
            productos?.map((p)=> {
                return <Card key={p._id}
                id={p._id}
                img={p.image}
                name={p.name}
                price={p.price}
                />
            })
            } */}
        </div>
    )
}

export default Home;