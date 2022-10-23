const axios = require("axios");
require("dotenv").config();

class PaymentService {
  async createPayment(req) {
    const datos = req.body
    const url = "https://api.mercadopago.com/checkout/preferences";
    
    const body = {
      payer_email: "test_user_46945293@testuser.com",
      items:datos.productos,
      back_urls: {
        failure: `http://localhost:3000/payment/failure`,
        pending: `http://localhost:3000/payment/pending`,
        success: `http://localhost:3000/payment/success`
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }
}

module.exports = PaymentService;