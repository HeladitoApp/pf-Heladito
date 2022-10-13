import axios from "axios";
import {getHelados, getSabores, getProductos, getToppings, getFrutas, getSecos, getCombos} from './reducer'

export const traerHelados = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/helados")
    .then(res => dispatch(getHelados(res.data)))
    .catch(error => console.log(error))
}

export const traerSabores = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/sabores")
    .then(res => dispatch(getSabores(res.data)))
    .catch(error => console.log(error))
}

export const traerProductos = () => (dispatch) => {
    axios.get("http://localhost:3800/productos")
    .then(res => dispatch(getProductos(res.data)))
    .catch(error => console.log(error))
}

export const traerToppings = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/toppings")
    .then(res => dispatch(getToppings(res.data)))
    .catch(error => console.log(error))
}

export const traerToppingsFrutas = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/toppings/frutas")
    .then(res => dispatch(getFrutas(res.data)))
    .catch(error => console.log(error))
}

export const traerToppingsSecos = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/toppings/secos")
    .then(res => dispatch(getSecos(res.data)))
    .catch(error => console.log(error))
}

export const traerCombos = () => (dispatch) => {
    axios.get("http://localhost:3800/productos/combos")
    .then(res => dispatch(getCombos(res.data)))
    .catch(error => console.log(error))
}
