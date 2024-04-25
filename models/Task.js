// models/Task.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tag = require('./Tag'); // Importe o modelo Tag

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

Task.belongsTo(Tag); // Definindo a relação de que uma Task pertence a uma Tag

module.exports = Task;
