const { request, response } = require('express');

const getDemo = function (req = request, res = response) {            
    res.status(200).json({message:'Estamos en el controlador de prueba'})
};


const getPrueba = function (req = request, res) {            
    res.status(200).json({message:'Estamos en el controlador de url demo'})
}

const getRender = function (req = request, res) {            
    res.status(200).json({message:'Estamos en el controlador de url render'})
}

module.exports = {
    getRender,
    getDemo,
    getPrueba
}