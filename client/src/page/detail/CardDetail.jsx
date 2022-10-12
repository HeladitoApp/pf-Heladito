import React from 'react';
import { Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';

export const CardDetail = () => {

  const dispatch = useDispatch();

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

  const sabores = [
    {
      "id": 1,
      "name": "Choco-avellana",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186866/e.sabor_chocoavellana_oj36qv.png"
    },
    {
      "id": 2,
      "name": "Cookies & cream",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186866/e.sabor_cookies_cream_x76sdl.png"
    },
    {
      "id": 3,
      "name": "Lúcuma",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186866/e.sabor_lucuma_wrrvur.png"
    },
    {
      "id": 4,
      "name": "Vainilla",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186866/e.sabor_original_urqtim.png"
    },
    {
      "id": 5,
      "name": "Maracuya",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186866/e.sabor_maracuya_fbwydd.png"
    }
  ]

  const frutas = [
    {
      "id": 1,
      "name": "Aguaymanto",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186867/aguaymanto_buwmit.png",
      "price": 123,
      "stock": ""
    },
    {
      "id": 2,
      "name": "Banana",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186867/banana_pmb4tp.png",
      "price": 123,
      "stock": ""
    },
    {
      "id": 3,
      "name": "Fresa",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186869/e.fresa_djouna.png",
      "price": 123,
      "stock": ""
    },
    {
      "id": 4,
      "name": "Sandia",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186870/sandia_shrnbr.png",
      "price": 123,
      "stock": ""
    },
    {
      "id": 5,
      "name": "Piña",
      "image": "https://res.cloudinary.com/dkfxfh6rc/image/upload/v1665186870/pi%C3%B1a_a32ahi.png",
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
      <div>
        <select>
          <option>Elige el sabor de tu helado</option>
          {
            sabores.map((sabor, index) => (
              <option key={index} value={sabor.name} background-image={sabor.image}>
                <p>{sabor.name}</p>
              </option>
            ))
          }
        </select>
      </div >
      <div>
        <select>
          <option>Elige los toppings para tu helado</option>
          {
            frutas.map((fruta, index) => (
              <option key={index} value={fruta.name} background-image={fruta.image}>
                <p>{fruta.name}</p>
              </option>
            ))
          }
        </select>
      </div >

    </React.Fragment >
  )
}
