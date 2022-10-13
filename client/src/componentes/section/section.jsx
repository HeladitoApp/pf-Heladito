import React from 'react';
import { useSelector } from 'react-redux';

const Section = () => {
  const productos = useSelector((state)=>state.state.productos);
    return (
    <div>
      <h3>Título de la sección</h3>
      <Order />
      {
        productos?.map(p=> {
            <Cards
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
