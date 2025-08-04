const express = require('express');
const apiRouter = require('./server')
const cors = require('cors');
const {errorLogs, handlerError} = require('./middleware/error.handler')
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.use(express.json());

//la req es la request osea la peticion
//la res es la respuesta de esa peticion
app.get('/',function(req, res){
  res.send('Hola mundo');
});

apiRouter(app);
app.use(errorLogs);
app.use(handlerError);

app.listen(port, function(req, res) {
  console.log(`Puerto escuchado en el ${port}`)
});


module.exports = app;
