const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./models/controllers/routes/userRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://jhonatanaugusto1998:5CHjwITIdcbgHkjD@cluster01.6bprpfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
