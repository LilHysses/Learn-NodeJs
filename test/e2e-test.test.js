const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index'); // Asegúrate de exportar la app en index.js


//GUARDADO DE DATOS POST
describe('Inserción metodo POST', () => {
  it('Debe crear un producto con name y price', (done) => {
    const products = {
      name: 'Compu',
      price: 2000
    };

    request(app)
      .post('/api/v1/products')
      .send(products)
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.equal(200);
        done();
      });
  });
});


//ACTUALIZACION DE DATOS PATCH

describe('Actualizacion metodo PATCH', () => {
  it('Actualizacion de Price o Name', (done) => {
    const products = {
      price: 2000
    }

    request(app)
    .patch('/api/v1/products/ea37aaf3-8326-47a7-9c12-5c947738b5c1')
    .send(products)
    .end((err, res) => {
      console.log(res.body);
      expect(res.status).to.equal(200);
      done();
    })
  });
})


//ELIMINACION DEL PRODUCTO CON EL METODO DELETE
describe('Eliminacion metodo DELETE', () => {
  it('Eliminacion de un producto', (done) => {
    request(app)
    .delete('/api/v1/products/1')
    .end((err, res) => {
      console.log('📥 Body recibido:', res.body);
      expect(res.status).to.equal(200);
      done();
    });
  });
});
