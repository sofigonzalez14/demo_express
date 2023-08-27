const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        
        //Seteo de puerto por defecto
        this.port = process.env.PORT || 3000;
        
        this.middleware();

        this.router();
    }

    middleware(){

        //Cors
        //TODO: Agregar alguna regla en caso que sea necesario
        this.app.use(cors());

        //Una vez configurada la carpeta pública, la ruta raíz (get('/') deja de funcionar
        this.app.use(express.static('public'));
    }

    listen(){   
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })  
    }

    router(){
        this.app.use('/api/v1', require('../routes/demo') );

        this.app.all('*', (req, res) => {
            res.status(404).json({message:'404 Page Not Found'})
        })
    }

}

module.exports = Server;