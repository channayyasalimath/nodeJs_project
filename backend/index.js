const express = require("express");
const app= express();
const cors= require('cors')
const bodyParser= require('body-parser');
// const morganApiLogger = require('morgan')
const routers= require('./routers/index')(express.Router(), app)

// app.get('/', indexRender)// This is in routers file
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(cors());
app.use('/', routers)
// app.use(morganApiLogger('dev'))
app.listen(1000, function(){
    console.log("App is listening in 1000 port")
})