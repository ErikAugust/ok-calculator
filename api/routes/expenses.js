const express = require('express');
const router = express.Router();

/**
 * GET /expenses
 * @author Erik August Johnson <erik@erikaugust.com>
 */
router.get('/', async (request, response, next) => {
    return response.json({
        text: 'Hello from GET /expenses!'
    });
});

module.exports = router;
