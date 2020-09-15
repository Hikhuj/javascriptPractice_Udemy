let http = require("http")

// Crear un servidor que escuche lo que vamos a escribir
// Objeto
// Es bueno almacenarlo en una variable para que sea mas facil, obviamente, manejarlo
// creando una funcion anonima con dos parametros que dan mejor sentido como request = req
// y response = res
let rogerApp = http.createServer(function(req, res) {

    // Podemos elegir que si ingresa a determinada URL, retorne algun mensaje o sitio web
    if (req.url == "/") {
        res.end("Bienvenidos al registro de compras")
    }

    // En este caso estamos devolviendo el about del sitio web
    if (req.url == "/about") {
        res.end("Acerca del programador")
    }

    // Y en este caso nosotros le estamos retornando al usuario que el sitio web que busca no existe
    res.end("Sitio incorrecto")
        // res.end("No podemos encontrar el sitio que usted busca")
})

// Metodo que le permite al servidor escuchar lo que reciba de un request hecho a este
// Se le debe pasar un argumento que le permita a uno donde debe escuchar, en que puerto
rogerApp.listen(4000)