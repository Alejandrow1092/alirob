//Creamos funciones para despues exportarlas como un modulo
const path = require('path')

const index= (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
}

module.exports = {
    index,
};