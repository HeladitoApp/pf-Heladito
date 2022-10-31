const Feedback = require("../models/Feedback");

async function getFeedbacks() {
  try {
    const result = await Feedback.find();
    if (!result) {
      throw new Error("Error al encontrar los Feedbacks en la DB");
    } else {
      return result;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  getFeedbacks,
};