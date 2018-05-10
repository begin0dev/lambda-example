const express = require('express');

const router = express.Router();
const db = require('../../models');

router.get('/:id', async (req, res, next) => {
  try {
    const product = await db.products.findById(req.params.id);
    res.json({ product });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
