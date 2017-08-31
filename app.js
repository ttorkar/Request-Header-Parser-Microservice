//Basic required imports for NodeJS
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var useragent = require('express-useragent')
//Meat
var app = module.exports = express()
app.use(bodyParser.json())
app.use(cors())
app.use(useragent.express());

var api = '/api/whoami'

app.get(api, function(req, res, next){
  var language = req.acceptsLanguages()
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser
  var ipaddress = req.ip;
res.json({'IP Address':ipaddress, 'Language': language[0], 'Software': software})
})

app.listen(3000, function(){
  console.log("Working")
})
