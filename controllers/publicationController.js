const getPublications = async (req, res, next) => {
  try {
    const publications = [];
    res.json(publications);
  } catch (error) {
    console.log('error on getDocuments', error);
  }
};

module.exports = {
  getPublications,
};
