const getCalifications = async (req, res, next) => {
    try {
        const publications = [];
        res.json(publications);
    } catch (error) {
        console.log('error on getCalifications', error);
    }
};

module.exports = {
    getCalifications,
};
