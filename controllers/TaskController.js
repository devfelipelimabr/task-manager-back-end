// controllers/TaskController.js

const Task = require('../models/Task');
const Tag = require('../models/Tag');

const TaskController = {
    async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.send(tasks);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao obter as tarefas.' });
        }
    },

    async getTasks(req, res) {
        const { id, title, date, createdAt, TagId } = req.query;

        // Verifica se pelo menos um parâmetro foi informado
        if (!id && !title && !date && !createdAt && !TagId) {
            return res.status(400).send({ message: 'Pelo menos um parâmetro deve ser informado.' });
        }

        try {
            let query = {};

            if (id) {
                query.id = id;
            }

            if (title) {
                query.title = title;
            }

            if (date) {
                query.date = date;
            }

            if (createdAt) {
                query.createdAt = createdAt;
            }

            if (TagId) {
                query.TagId = TagId;
            }

            const tasks = await Task.findAll({
                where: query,
                include: [{ model: Tag }]
            });

            res.send(tasks);
        } catch (error) {
            res.status(500).send({ message: 'Erro ao obter as tarefas.' });
        }
    },

    async createTask(req, res) {
        try {
            const { title, description, date, duration, TagId } = req.body;

            // Criar a tarefa associada à tag
            const task = await Task.create({ title, description, date, duration, TagId });

            res.status(201).send(task);
        } catch (error) {
            res.status(400).send({ message: 'Erro ao criar a tarefa.' });
        }
    },

    async updateTask(req, res) {
        try {
            const { title, description, date, duration, TagId } = req.body;

            // Encontrar a tarefa pelo ID
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).send({ message: 'Tarefa não encontrada.' });
            }

            // Atualizar os campos da tarefa e a tag associada
            await task.update({ title, description, date, duration, TagId });

            res.send({ message: 'Tarefa atualizada com sucesso!' });
        } catch (error) {
            res.status(400).send({ message: 'Erro ao atualizar a tarefa.' });
        }
    },

    async deleteTask(req, res) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (!task) {
                return res.status(404).send({ message: 'Tarefa não encontrada.' });
            }

            await task.destroy();

            res.send({ message: 'Tarefa removida com sucesso!' });
        } catch (error) {
            res.status(400).send({ message: 'Erro ao remover a tarefa.' });
        }
    }
};

module.exports = TaskController;
