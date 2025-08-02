const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;

//la req es la request osea la peticion
//la res es la respuesta de esa peticion
app.get('/',function(req, res){
  res.send('Hola mundo desde mi ruta raiz');
});

app.get('/products', (req, res)=> {
  const products = [];
  const size = parseInt(req.query.size) || 5;
  for(let index = 0; index < size; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/user', function(req, res) {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    });
  } else{
    res.send('No hay ningun parametro')
  }
});

app.get('/products/:id/products', function(req, res) {
  const { id } = req.params;
  res.json({
    'id': id,
    'name': 'Teclado Gamer',
    'price': 120000,
    'category': 'Tecnology',
  });
});

app.listen(port, function(req, res) {
  console.log(`Puerto escuchado en el ${port}`)
});
