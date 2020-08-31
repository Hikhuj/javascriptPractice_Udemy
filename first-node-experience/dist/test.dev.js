"use strict";

var http = require("http"); // Crear un servidor que escuche lo que vamos a escribir
// Objeto
// Es bueno almacenarlo en una variable para que sea mas facil, obviamente, manejarlo
// creando una funcion anonima con dos parametros que dan mejor sentido como request = req
// y response = res


var rogerApp = http.createServer(function (req, res) {
  console.log(req.url);
  res.end("Hola, bienvenidos a mi servidor webservice.");
}); // Metodo que le permite al servidor escuchar lo que reciba de un request hecho a este
// Se le debe pasar un argumento que le permita a uno donde debe escuchar, en que puerto

rogerApp.listen(3000);