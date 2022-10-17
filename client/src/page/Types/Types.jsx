import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import Card from '../../componentes/cards/card';
import CarouselPromociones from '../../componentes/carouselPromociones/CarouselPromociones'
import { getProdsFromDb } from '../../redux/actions/products';
import Section from '../../componentes/section/section'
import { useParams } from 'react-router-dom';
// import Pagination from '../../componentes/Pagination/pagination';


const Types = () => {
    // const productos = useSelector((state)=>state.state.productos);
    // const types = useSelector((state)=>state.state.types);

    const { type } = useParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProdsFromDb());
    },[dispatch]);
    //console.log(productos);

    return (
        <div>
            <CarouselPromociones/>            
            <div>                
                <Section t={type} />
            </div>
        </div>
    )
}

export default Types;