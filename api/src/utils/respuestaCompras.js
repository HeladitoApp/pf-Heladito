const Compras = require("../models/Compras");


async function Respuestasuccess(data){
    const link = `${process.env.BACK_APP_FRONT_URL}/payment/success?compra_id=${data.compra_id}`
    // console.log(data.compra_id); 
    try {
        await Compras.updateOne(
            {"_id": data.compra_id},
            {$set: { "pagado" : true }}
            )
        return link;
    } catch (error) {
        console.log(error)
    }

}
async function Respuestapending(){

}
async function Respuestafailure(){

}
module.exports = {
    Respuestasuccess,
    Respuestapending,
    Respuestafailure
  };
  
