const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const toonController = require('./toonController');

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log(`Connected to external database.`)
    }).catch(err => console.log(`Database Connection Error`))

app.post('/api/looneyTune', toonController.createNewToon);

app.get('/api/looneyTunes/getAllTunes', toonController.getAllToons);

app.put('/api/looneyTunes/:id', toonController.uploadPictureLink);

// need app.delete('/api/looneyTunes/:id', toonController. <new controller> )

// need app.get by id on params

const port = 3003;
app.listen(port, () => console.log(`Port: ${port} has opened, all may rejoice and be glad.`))