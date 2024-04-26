// routes/tagRoutes.js

const express = require('express');
const router = express.Router();
const TagController = require('../controllers/TagController');

// Rotas para tags
router.get('/tags', TagController.getAllTags);
router.get('/tags/:id', TagController.getTagById);
router.post('/tags', TagController.createTag);
router.put('/tags/:id', TagController.updateTag);
router.delete('/tags/:id', TagController.deleteTag);

module.exports = router;
