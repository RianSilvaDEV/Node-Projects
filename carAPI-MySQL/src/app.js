require('dotenv').config()
const express = require("express");
const cors = require('cors'); /// especificação w3c para trabalhar com api, permite acesso de outros dominios diferentes
const bodyParser = require('body-parser'); // convert body de uma requisição para varios outros formatos
const cars = require("./routes/car");
const notFound = require('./middleware/not-found');
const errorHandlerMiddlewar = require('./middleware/error-handler');

const app = express();
{
    app.use(express.json());
    app.use("/api/v1/cars", cars);
    app.use(notFound)
    app.use(errorHandlerMiddlewar);
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
}

app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`));

