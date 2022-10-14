const { filterByTypeFunction } = require("../utils/filterByType");

async function filterByType(req, res) {
  const typeFilter = req.params.type;
  const result = await filterByTypeFunction(typeFilter);
  try {
    result.length
      ? res.status(200).send({ message: result })
      : res.status(502).send({
          message:
            "No hay Tipos asociados con este id, verificar que la informacion es correcta",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  filterByType,
};
