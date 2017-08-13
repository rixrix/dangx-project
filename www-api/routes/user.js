'use strict';

module.exports = (express) => {
    const router = express.Router();

    router.get('/list', (req, res) => {
        res.status(200).json({
            message: 'user list'
        });
    });

    return router;
};
