const calificationService = require("../services/calificationService");

const getCalifications = async (req, res, next) => {
  try {
    const publications = await calificationService.get();
    res.json(publications);
  } catch (error) {
    console.log("error on getCalifications", error);
  }
};

module.exports = {
  getCalifications,
};
