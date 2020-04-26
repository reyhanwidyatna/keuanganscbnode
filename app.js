const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes/route')
const app = express()
const PORT = process.env.PORT || 8000


app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


routes(app)


app.listen(PORT, function(){
    console.log("This server is listening to PORT:", PORT);
});