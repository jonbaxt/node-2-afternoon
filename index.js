const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');
      require('dotenv').config();
const products_controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance) 
    console.log('The database is now connected.');
}).catch( err => console.log(`Did not connect to the database`) );



app.post('/api/product', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.delete);



//      This was what it looked like in the solutions file.
const port = process.env.PORT || 3000
// const port = 3000;
app.listen( port, () => console.log(`Port: ${port} is now on.`));