const express = require('express');
const CategoriesService = require('../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await service.findOne(id);
  if (!product) res.status(404).send('Not found');
  else res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:id', async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const category = await service.update(id, body);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
