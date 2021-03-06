const express = require('express');
const router = express.Router();

/**
 * GET /
 * @author Erik August Johnson <erik@erikaugust.com>
 */
router.get('/', async (request, response, next) => {
  return response.json({
    message: 'Hello world!'
  });
});

module.exports = router;
