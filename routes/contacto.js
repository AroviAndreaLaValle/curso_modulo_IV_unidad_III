var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {isContacto:true});
});

router.post('/', async (req, res, next)=>{

  var nombre=req.body.nombre;
  var apellido=req.body.apellido;
  var email=req.body.email;
  var telefono=req.body.telefono;
  var mensaje=req.body.mensaje;

  var obj={
    to:"arovilv@gmail.com",
    subject:"Contacto desde Web Mi Libreria",
    html: nombre + " " + apellido + "<br> E-mail: " + email + "<br> Telefono: " + telefono + "<br> Mensaje: " + mensaje
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info =await transport.sendMail(obj);

  res.render('contacto', {
    message:"Su mensaje ha sido enviado correctamente",
  });

});

module.exports = router;