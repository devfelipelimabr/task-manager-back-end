// Backend
require('dotenv').config();
const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();

// Conexão com o MySQL
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Modelos
class Task extends Model { }
Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    tags: DataTypes.STRING // Armazene as tags como uma string separada por vírgulas
}, { sequelize, modelName: 'task' });

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
});

app.post('/tasks', async (req, res) => {
    const task = await Task.create(req.body);
    res.send(task);
});

app.put('/tasks/:id', async (req, res) => {
    await Task.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send({ message: 'Tarefa atualizada com sucesso!' });
});

app.delete('/tasks/:id', async (req, res) => {
    await Task.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ message: 'Tarefa removida com sucesso!' });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
