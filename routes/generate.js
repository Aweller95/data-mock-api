const express = require('express');
const router = express.Router();

const { generate } = require('../service');

router.post('/', (req, res, next) => {
  const { body } = req;
  let data = {};

  try {
    data = generate(body.schema, body.quantity);
  } catch (e) {
    res.status(400);
    res.send({ error: e.message });
  }

  res.send({ data });
});

module.exports = router;
