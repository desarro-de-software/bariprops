const getUsers = async (req, res, next) => {
    try {
        const users = [];
        res.json(users);
    } catch (error) {
        console.log('error on getUser', error);
    }
};

module.exports = {
    getUsers,
};
