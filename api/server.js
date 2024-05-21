import express from 'express';

const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'hola mundo' });
});

app.listen(port, () => {
  console.log(`Servidor de Express escuchando en http://localhost:${port}`);
});
