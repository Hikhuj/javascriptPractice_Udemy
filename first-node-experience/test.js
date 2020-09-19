// ---->let http = require("http")

// Crear un servidor que escuche lo que vamos a escribir
// Objeto
// Es bueno almacenarlo en una variable para que sea mas facil, obviamente, manejarlo
// creando una funcion anonima con dos parametros que dan mejor sentido como request = req
// y response = res
// ----> let rogerApp = http.createServer(function(req, res) {

    // Podemos elegir que si ingresa a determinada URL, retorne algun mensaje o sitio web
// ---->    if (req.url == "/") {
// ---->        res.end("Bienvenidos al registro de compras")
// ---->    }

    // En este caso estamos devolviendo el about del sitio web
// ---->    if (req.url == "/about") {
// ---->        res.end("Acerca del programador")
// ---->    }

// ---->    if (req.url == "/contact"){
// ---->        res.end("Hola, este es mi contacto")
// ---->    }

    // Y en este caso nosotros le estamos retornando al usuario que el sitio web que busca no existe
// ---->    res.end("Sitio incorrecto")
// ---->        // res.end("No podemos encontrar el sitio que usted busca")
// ---->})

// Metodo que le permite al servidor escuchar lo que reciba de un request hecho a este
// Se le debe pasar un argumento que le permita a uno donde debe escuchar, en que puerto
// ----> rogerApp.listen(4000)


// *---------------------------*
// *---------------------------*
// *---------------------------*
// * APLICACION EXPRESS ABAJO  *
// *---------------------------*
// *---------------------------*
// *---------------------------*

// Aqui vamos a usar express en adelante
let express = require("express")

// Retorna una aplicacione de tipo EXPRESS
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

// Que deberia hacer si alguien hace un request a neustra pagina
// a = URL que quiero que vea el reques solicitado
// b = la funcion que quiero que EXPRESS ejecute
// en este caso B lo vamos a poner como funcion anonima
// En este estamos creando un HOME
// acion="/answer" -> URL que que el browser va a enviar los resultados
// method="POST" -> tipo de request
// Request: GET= request de lo que quiero que haga, incluso cuando escribo el URL
// Request: POST= request para enviar datos.
ourApp.get('/', function(req, res) {
    res.send(`
        <form action="/answer" method="POST">
            <p>De que color es el cielo en un dia claro?</p>
            <input name="skyColor" autocomplete="off">
            <button>Submit Answer</button>
        </form>
    `)
})

// Aqui defino que quiero que haga con los datos que se envian en el form
ourApp.post('/answer', function(req, res){
    // Vamos a realizar una evaluacion para ve si los datos estan bien
    // Aqui estoy tratando de tomar el REQUEST (req), buscar en el BODY y buscar
    // la propiead skyColor y si esta es igual a la que ocupo pasa la decision.
    // Por default EXPRESS no permite agregar los datos del USUARIO al objecto del BODY
    // Creamos una solucion sencilla que ya existe por defaul por EXPRESS
    // arriba llamada ourApp.use(express.urlencoded({extended: false}))
    if (req.body.skyColor.toUpperCase() == "BLUE"){
        // Nuestra teoricamente respuesta correcta
        res.send(`
            <p>Felicidades, es la respuesta correcta!</p>
            <a href="/">De vuelta a la pagina de inicio</a>
        `)
    } else {
        res.send(`
            <p>Lo sentimos, su respuesta es incorrecta.</p>
            <a href="/">De vuelta al inicio</a>
        `)
    }
})

ourApp.get('/answer', function(req, res){
    res.send("Nada que ver aqui")
})

// Escuche los request en X puerto
ourApp.listen(3000)
