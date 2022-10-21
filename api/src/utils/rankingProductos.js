const Compras = require("../models/Compras");

async function rankingMejoresCompras() {
  try {
    const ProductosMasvend = await Compras.find(null,{productos:1,_id:0});
    console.log(ProductosMasvend)
    const ArraydeObjProduc = ProductosMasvend.map(p => {
    return (
    p.productos )})
    //console.log(ArraydeObjProduc)
      const reducer = (accumulator, curr) => accumulator.concat(curr);
      const prodCompradosJuntos= ArraydeObjProduc.reduce(reducer); 

      if (!prodCompradosJuntos.length) {
      throw new Error(
        "Error al cargar los Usuarios desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
        key = "name"

        let arr2 = [];
            
          prodCompradosJuntos.forEach((x)=>{
 
             if(arr2.some((val)=>{ return val[key] == x[key] })){
                 
               arr2.forEach((k)=>{
                 if(k[key] === x[key]){ 
                   k["occurrence"]++
                 }
              })
                 
             }else{
               let a = {}
               a[key] = x[key]
               a["occurrence"] = 1
               arr2.push(a)
             }
          })       
          const orden = arr2.sort(function (a, b){
            return (b.occurrence - a.occurrence)
        })
       

         return orden
          //return ProductosMasvend
        
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}




module.exports = {
    rankingMejoresCompras,
};
