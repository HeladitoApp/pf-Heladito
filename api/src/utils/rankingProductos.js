const Compras = require("../models/Compras");

async function rankingMejoresCompras() {
  try {
   
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd ;
month= yyyy + '/' + mm + '/' + 01 ;

 let total=0;
 let suma=0;
 let totalCompras=[];
  
   const ComprasDelMes=await Compras.find({"createdAt" : {"$gt" : new Date(month)}})
   ComprasDelMes.forEach( function(k){
     total    += 1;
     suma +=k.sumaTotal
   
   });  

let totalD=0;
let sumaD=0;
   const ComprasDelDia=await Compras.find({"createdAt" : {"$gt" : new Date(today)}})
   ComprasDelDia.forEach( function(k){
     totalD    += 1;
     sumaD +=k.sumaTotal
   
   });  
   
   totalCompras.push(total,suma,totalD,sumaD)


   
   const ProductosMasvend = await Compras.find({"createdAt" : {"$gt" : new Date(month)}},{productos:1,_id:0});
   console.log(ProductosMasvend)
   const ArraydeObjProduc = ProductosMasvend.map(p => {
   return (
   p.productos )})
   //console.log(ArraydeObjProduc)
     const reducer = (accumulator, curr) => accumulator.concat(curr);
     const prodCompradosJuntos= ArraydeObjProduc.reduce(reducer); 


     key = "name";

       let arr2 = [];
       let productCategory=[];
           
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
       let totalH=0;
       orden.forEach( function(k){
        if(k.name==="HeladitosApp mediano de 1 sabor + toppings" || k.name==="HeladitosApp mediano de 2 sabores + toppings"|| k.name==="HeladitosApp large de 1 sabor + toppings" || k.name==="HeladitosApp large de 2 sabores + toppings"|| k.name==="HeladitosApp mediano de 1 sabor sin toppings"|| k.name==="HeladitosApp mediano de 2 sabores sin toppings")
        totalH    += k.occurrence;
       
      
      });  
      

      let totalC=0;
       orden.forEach( function(k){
        if(k.name==="2 vasitos small con topping + 1 bombón HeladitosApp" || k.name==="4 vasitos small con toppings"|| k.name==="2 vasitos medianos con toppings" || k.name==="Super cup HeladitosAPP + 2 vasitos de toppings"|| k.name==="1 crepe + 1 vasito small con toppings"|| k.name==="Vaso HeladitosApp XL + cobertura de chocolate")
        totalC    += k.occurrence;
       
      
      });  
 
   
      let totalB=0;
      orden.forEach( function(k){
       if(k.name==="Bombones chocolate con avellanas" || k.name==="Bombones chocolate con avellanas XL"|| k.name==="Bombones Vainilla"|| k.name==="Bombones Vainilla XL"||k.name==="Bombones lúcuma"||k.name==="Bombones lúcuma XL" || k.name ==="Bombones cookies & cream" || k.name==="Bombones cookies & cream XL")
       totalB    += k.occurrence;
      
     
     });  
     let totalSH=0;
     orden.forEach( function(k){
      if(k.name==="Shake fresa - banana" || k.name==="Shake choco cookie"|| k.name==="Shake piña colada")
      totalSH    += k.occurrence;
     
    
    });

    let totalCr=0;
    orden.forEach( function(k){
     if(k.name==="Crepe con crema de avellanas + heladito" || k.name==="Crepe con dulce de leche + heladito"|| k.name==="Crepe con fudge + heladito")
     totalCr   += k.occurrence;
    
   
   });
   let totalP=0;
   orden.forEach( function(k){
    if(k.name==="Parfait cookies & cream" || k.name==="Parfait piña colada"|| k.name==="Parfait Vainilla" || k.name ==="Parfait chocolate con avellanas" || k.name==="Parfait lúcuma")
    totalP   += k.occurrence;
   
  
  });
     productCategory.push(totalH, totalC,totalB,totalSH,totalCr,totalP)
     
     totalCompras.push(productCategory);
 
     var today = new Date();
     var ayer=new Date(today.getTime() - 24*60*60*1000);
     var da = String(ayer.getDate()).padStart(2, '0');
     var ma = String(ayer.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = ayer.getFullYear();
         let totalAnt=0;
         let sumaAnt=0; 
          let todayAnt = yyyy + '/' + ma  + '/' + da ;
          let monthAnt= yyyy + '/' + ma + '/' + 01 ; 
          
          const ComprasDelMesAnt=await Compras.find({"createdAt" : {"$gt" : new Date(monthAnt)}})
          ComprasDelMesAnt.forEach( function(k){
            totalAnt    += 1;
            sumaAnt +=k.sumaTotal
          
          });  

          sumaAnt=Math.abs(sumaAnt-suma)
          totalAnt=Math.abs(totalAnt -total)
       
       let totalDAnt=0; 
       let sumaDAnt=0;
          const ComprasDelDiaAnt=await Compras.find({"createdAt" : {"$gte" : new Date(todayAnt)}})

          
          ComprasDelDiaAnt.forEach( function(k){
            totalDAnt    += 1;
            sumaDAnt +=k.sumaTotal
          
          });  
          sumaDAnt=Math.abs(sumaDAnt-sumaD)
          totalDAnt=Math.abs(totalDAnt -totalD)
        
          totalCompras.push(totalAnt,sumaAnt,totalDAnt,sumaDAnt)
  

     

    if (!totalCompras.length) {
      throw new Error(
        "Error al cargar los Productos más vendidos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
    return totalCompras
    
     
          
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  rankingMejoresCompras,
};
