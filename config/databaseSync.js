const sequelize = require('./database');
const Task = require('../models/Task');
const Tag = require('../models/Tag');
const User = require('../models/User');

// Sincroniza os modelos com o banco de dados
sequelize.sync({ force: false }) // false -> cria as tabelas apenas se não existirem
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar tabelas:', err);
    });
