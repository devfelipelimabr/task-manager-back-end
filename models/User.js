// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Definindo o modelo de Usuário
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Método para hash da senha antes de salvar no banco de dados
User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
});

// Método para verificar a senha
User.prototype.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Método para gerar token JWT
User.prototype.generateJWT = function (userId) {
    return jwt.sign(
        { userId }, process.env.JWT_SECRET, { expiresIn: '20d' }
    );
};

// Exportando o modelo de Usuário
module.exports = User;
