const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routers/formrequestrouter')
const app = express()
const PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app)

app.listen(PORT, function(){
    console.log("This server is listening to PORT:", PORT);
});