const http = require("http");

const puerto = 3000;
const host = "localhost";

const informacionPersonal = [
  {
    nombre: "Menfi",
    apellido: "Garcia",
    telefono: 5047896252111,
    Pais: "Honduras",
  },
];

let server = http.createServer((request, respuesta) => {
  if (request.method === "GET" && request.url === "/paginaprincipal") {
    respuesta.statusCode = 200;
    respuesta.setHeader("Content-type", "text/html");
    const html = `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina Principal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,100;9..40,600;9..40,800&family=Kanit:wght@500&family=Libre+Franklin:wght@700&family=Lilita+One&family=Martian+Mono:wght@500;600&family=Poppins&family=Rubik:ital,wght@0,900;1,300&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: 'Kanit', sans-serif;
            background-image: url(https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-atardecer-bosque-minimo-4k-8k-naturaleza-scaled.jpg);
            background-size: 500px;
            background-position: center;
            background-size: 1400px;
            background-attachment: fixed;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            margin: 40px;
        }

        .container {
            padding: 40px;
            text-align: center;
            width: 600px;
            background-color: rgba(0, 0, 0, 0.534);
            border-radius: 15px;
            box-shadow: 0 0 30px rgb(78, 78, 78);
            display: inline-block;
            display: block;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 40px;
            color: white;

        }

        .container2 {
            display: flex;
            padding: 40px;
            text-align: center;
            width: 400px;
            border-radius: 15px;
            background-image: url(https://www.xtrafondos.com/descargar.php?id=3128&resolucion=2880x1800);
            background-size: 550px;
            display: inline-block;
            display: block;
            margin-right: auto;
            margin-left: auto;
            color: white;
        }

        .container3 {
            padding: 40px;
            text-align: center;
            width: 200px;
            display: inline-block;
            display: block;
            margin-right: auto;
            margin-left: auto;
            color: lawngreen;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>SERVIDOR WEB CON NODE JS</h2>
        <hr>
        <img src="https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png" width="250px">
        <p>Un servidor web con Node.js es un programa o aplicación que utiliza el entorno de tiempo de ejecución de
            Node.js para
            servir contenido web a los clientes a través del protocolo HTTP (Hypertext Transfer Protocol). Node.js es
            una plataforma
            de tiempo de ejecución de JavaScript que permite a los desarrolladores construir aplicaciones del lado del
            servidor y,
            por lo tanto, es adecuada para crear servidores web.</p>
    </div>

    <div class="container2">
        <h3>Nombre: Menfi</h3>
        <h3>Apellido: Garcia</h3>
        <h3>Telefono: +504525233333333</h3>
        <h3>Edad: 28</h3>
        <h3>Pais: Honduras</h3>

    </div>


    <div class="container3">
        <p>Realizado por:</p>
        <hr>
        <h1>Menfi Garcia</h1>

    </div>
</body>

</html>`;
    respuesta.end(html);
  } else if (request.method === "GET" && request.url === "/pagina2") {
    respuesta.statusCode = 200;
    respuesta.setHeader("Content-type", "application/json");
    respuesta.end(JSON.stringify(informacionPersonal));
  } 
  else {
    respuesta.statusCode = 404;
    respuesta.end("HTTP 404 Not Found");
  }
});

server.listen(puerto, host, () => {
  console.log(
    `El servidor funciona correctamente en el puerto ${puerto} y el host ${host}`
  );
});
