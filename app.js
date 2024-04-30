// app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const tagRoutes = require('./routes/tagRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', userRoutes); // Rotas de usuário
app.use('/',authMiddleware, taskRoutes); 
app.use('/',authMiddleware, tagRoutes); 

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
