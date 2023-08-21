require('dotenv').config();
const Server = require('./models/server');

//Instancia de la clase Server
const express = new Server();

//Invocamos el método listen para levantar nuestro servidor
express.listen();


