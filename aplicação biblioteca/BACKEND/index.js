const express = require('express');
const app = express();
const port = 3000;

// Middleware básico
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
