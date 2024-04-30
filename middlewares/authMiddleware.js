// authMiddleware.js

require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware de autenticação
const authenticateUser = async (req, res, next) => {
    // Verificar se o token de autenticação foi enviado nos cabeçalhos da solicitação
    const bearerToken  = req.headers.authorization;
    
    if (!bearerToken) {
        return res.status(401).json({ error: 'Token de autenticação não fornecido.' });
    }
    
    const token = bearerToken.substring(7);

    try {
       // Verificar se o token é válido
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Procurar o usuário no banco de dados usando o ID do usuário fornecido no token
        const user = await User.findByPk(decoded.userId);
       
        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado.' });
        }

        // Anexar o usuário autenticado ao objeto de solicitação para uso posterior nas rotas protegidas
        req.user = user.email;
        console.log("UserAuth: ", req.user);
        next(); // Chame next() para continuar com o próximo middleware ou rota
    } catch (error) {
        return res.status(401).json({ error: 'Token de autenticação inválido.' });
    }
};

module.exports = authenticateUser;
