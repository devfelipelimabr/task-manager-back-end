// controllers/UserController.js

const User = require('../models/User');

// Função para registrar um novo usuário
exports.registerUser = async (req, res) => {
    try {
        // Extrair dados do corpo da requisição
        const { email, password } = req.body;

        // Verificar se o usuário já existe no banco de dados
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Criar o novo usuário
        const newUser = await User.create({ email, password });

        // Retornar o novo usuário criado
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Função para fazer login de um usuário
exports.loginUser = async (req, res) => {
    try {
        // Extrair dados do corpo da requisição
        const { email, password } = req.body;

        // Verificar se o usuário existe no banco de dados
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Verificar se a senha está correta
        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Gerar token JWT
        const token = user.generateJWT(user.id);

        // Retornar uma resposta de sucesso com o token JWT
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};