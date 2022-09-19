const express= require('express');
const router = express.Router();
const path = require('path');

const indexController = require('../controllers/index');

//Ejemplo
//router.get('/', indexController.index);

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
});

router.get('/views/partials/footer.html', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/partials', 'footer.html'))
});

router.get('/galeria', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'galeria.html'))
})

router.get('/participants', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/participants.html'));
})

router.get('/grants', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/grants.html'))
})

router.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/contact.html'));
})

module.exports = router;
