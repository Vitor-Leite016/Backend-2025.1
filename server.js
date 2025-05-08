import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Qualquer coisa');
});

app.get('/Vitor', (req, res) => {
    res.send('Vitor é mo massa');
  });

  app.get('/user/:id', (req, res) => {

    res.json({
        params: req.params,
        query: req.query,
        method: req.method,
        headers: req.headers,
    });
  
});

app.listen(PORT, () => {
  console.log(`Servidor escutando em  http://127.0.0.1:${PORT}`);
});