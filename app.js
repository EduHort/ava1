const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Funções da calculadora
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ result: sum });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const difference = parseFloat(a) - parseFloat(b);
    res.json({ result: difference });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const product = parseFloat(a) * parseFloat(b);
    res.json({ result: product });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (parseFloat(b) === 0) {
        return res.status(400).json({ error: 'Não é possivel dividir por zero' });
    }
    const quotient = parseFloat(a) / parseFloat(b);
    res.json({ result: quotient });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
