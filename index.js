const express = require('express');
const apiRouter = require('./server')
const app = express();
const port = 3000;

app.use(express.json());

//la req es la request osea la peticion
//la res es la respuesta de esa peticion
app.get('/',function(req, res){
  res.send('Hola mundo desde mi ruta raiz');
});

apiRouter(app);

app.listen(port, function(req, res) {
  console.log(`Puerto escuchado en el ${port}`)
});
