import React from 'react';
import { useDispatch } from 'react-redux';
import  FlavorsList  from '../../componentes/Acordeon/FlavorsList';
import  ToppingsList  from '../../componentes/Acordeon/ToppingsList';
import Contador from '../../componentes/Contador/Contador';

export const CardDetail = () => {

  /* const dispatch = useDispatch(); */

  const helados = [
    {
      "id": 1,
      "name": "HeladitosApp mediano de 1 sabor + toppings",
      "description": "Vaso HeladitosApp de 1 sabor - tamaño mediano + 6 toppings a elección.",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665533182/e.cups_mt1s_bg01yi.png",
      "price": 123,
      "stock": ""
    }
  ]

  return (
    <React.Fragment>
      <div>
        {helados.map((helado, index) => (
          <div key={index}>
            <h1>{helado.name}</h1>
            <img src={helado.image} alt='helado' />
            <h1>{helado.price}</h1>
            <h3>{helado.description}</h3>
          </div>
        ))}
      </div>
      <Contador />
      <FlavorsList />
      <ToppingsList />
      

    </React.Fragment >
  )
}
