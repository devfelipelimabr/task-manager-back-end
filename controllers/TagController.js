// controllers/TagController.js

const Tag = require('../models/Tag');

const TagController = {
    async getAllTags(req, res) {
        try {
            const tags = await Tag.findAll();
            res.send(tags);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao obter as tags.' });
        }
    },

    async createTag(req, res) {
        try {
            const tag = await Tag.create(req.body);
            res.status(201).send(tag);
        } catch (error) {
            res.status(400).send({ message: 'Erro ao criar a tag.' });
        }
    },

    async updateTag(req, res) {
        try {
            const tag = await Tag.findByPk(req.params.id);
            if (!tag) {
                return res.status(404).send({ message: 'Tag não encontrada.' });
            }
            await tag.update(req.body);
            res.send({ message: 'Tag atualizada com sucesso!' });
        } catch (error) {
            res.status(400).send({ message: 'Erro ao atualizar a tag.' });
        }
    },

    async deleteTag(req, res) {
        try {
            const tag = await Tag.findByPk(req.params.id);
            if (!tag) {
                return res.status(404).send({ message: 'Tag não encontrada.' });
            }
            await tag.destroy();
            res.send({ message: 'Tag removida com sucesso!' });
        } catch (error) {
            res.status(400).send({ message: 'Erro ao remover a tag.' });
        }
    }
};

module.exports = TagController;
