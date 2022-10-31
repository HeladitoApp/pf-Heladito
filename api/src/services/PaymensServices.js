const axios = require("axios");
const { postCompra } = require("../utils/postCompra");
const { sendFacturaMail } = require("../utils/sendFactura");
require("dotenv").config();

class PaymentService {
  async createPayment(req) {
    const datos = req.body;
    const url = process.env.ACCESS_URL;
    const compra = await postCompra(req);
    // console.log(compra);
    const body = {
      payer_email: "test_user_46945293@testuser.com" /* datos.usuario */,
      items: datos.productos,
      back_urls: {
        failure: `http://localhost:3000/payment/failure`,
        pending: `http://localhost:3000/payment/pending`,
        success: `http://localhost:3800/payment/success?compra_id=${compra._id}`,
      },
    };

    sendFacturaMail(datos, compra);

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }
}

module.exports = PaymentService;
