import { useState } from "react";
export const keyCarrito = "ProductosCarrito";

export function useLocalStorage(key, initialvalue){
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key)
            return item? JSON.parse(item):initialvalue
        } catch (error) {
            return initialvalue
        }
    })
    const setValue = (valor) =>{
        try {
            setStoredValue(valor)
            window.localStorage.setItem(key, JSON.stringify(valor))
        } catch (e) {
            console.error(e)
        }
    }
    return [storedValue, setValue]
}
