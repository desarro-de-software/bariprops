const getPeople = async (req, res, next) => {
  try {
    const people = [];
    res.json(people);
  } catch (error) {
    console.log("error on getPeople", error);
  }
};

module.exports = { getPeople };
