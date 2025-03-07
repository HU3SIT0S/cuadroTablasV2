const express = require('express');
// Punto y coma agregado
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Hello World'); // 2 espacios de indentación
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Punto y coma agregado
});