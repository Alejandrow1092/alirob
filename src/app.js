const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index.js')
/* const {NodeSSH}= require('node-ssh')
const ssh = new NodeSSH() */
//const setDomain = require('express-set-domain')

//settings********************************
app.set('views', path.join(__dirname, 'src/views'))
app.set('port', process.env.PORT || 3000);

/* ssh.connect({
    host: '148.204.58.221',
    username: 'genaro',
    password: 'g2n1r42sc4m'
}) */

//app.use(setDomain('https://www.comunidad.escom.ipn.mx/museo/'));
//middlewares****************************


//routes******************************
app.use(routes);

//static files*************************

app.use(express.static(path.join(__dirname, './public')));

// comienza el app***********************

app.listen(3000, ()=>console.log("El servidor esta vivo"))