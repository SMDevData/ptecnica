const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
  { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
  { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
  { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4' },
  { id: 5, name: 'Producto 5', description: 'Descripción del Producto 5' },
  { id: 6, name: 'Producto 6', description: 'Descripción del Producto 6' },
  { id: 7, name: 'Producto 7', description: 'Descripción del Producto 7' },
  { id: 8, name: 'Producto 8', description: 'Descripción del Producto 8' },
  { id: 9, name: 'Producto 9', description: 'Descripción del Producto 9' },
  { id: 10, name: 'Producto 10', description: 'Descripción del Producto 10' },
  { id: 11, name: 'Producto 11', description: 'Descripción del Producto 11' },
  { id: 12, name: 'Producto 12', description: 'Descripción del Producto 12' },
  { id: 13, name: 'Producto 13', description: 'Descripción del Producto 13' },
  { id: 14, name: 'Producto 14', description: 'Descripción del Producto 14' },
  { id: 15, name: 'Producto 15', description: 'Descripción del Producto 15' },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
