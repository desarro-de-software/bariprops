const getPeople = async (req, res, next) => {
  try {
    const people = [];
    res.json(people);
  } catch (error) {
    console.log("error on getDocuments", error);
  }
};

module.exports = { getPeople };
