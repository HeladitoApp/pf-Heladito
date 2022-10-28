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
import Loading from '../../componentes/loading/loading';
import { setLoading } from '../../redux/actions/loading';
import NavInferior from '../../componentes/navBar/navInferior';
import Chat from '../Chat/Chat';



const Home = ({ page, setPage }) => {
    const productos = useSelector((state) => state.state.productos);
    const loading = useSelector((state) => state.state.loading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProdsFromDb());
        dispatch(setLoading(true));
        window.scrollTo(0, 0);
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1500);
    }, [dispatch]);

    const [perPage, setPerPage] = useState(8);
    const max = Math.ceil(productos.length / perPage);


    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <div>
                <NavInferior setPage={setPage} page={page}/>
                <CarouselPromociones />
                {/* <Pagination page={page} setPage={setPage} max={max}/> */}
                <div className={s.order}>
                    <Order />
                </div>
                <div className={s.cardContainer}>
                    {
                        productos
                            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                            .map((p) => {
                                return <Card
                                    key={p._id}
                                    id={p._id}
                                    stock={p.stock}
                                    img={p.image}
                                    name={p.name}
                                    price={p.price}
                                />
                            })
                    }
                </div>
                <Pagination page={page} setPage={setPage} max={max} />
                <Chat/>  
            </div>
        )
    }
}


export default Home;