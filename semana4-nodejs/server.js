const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor funcionando - Semana 4');
});

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Node.js' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
