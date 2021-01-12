const express = require('express')
const nunjucks = require('nunjucks')

const server = express ()
const posts = require("./data") //Pegando as infos dentro de data.js

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    return res.render("courses", { items: posts }) //enviando items para ser usado no courses
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log("Server is running")
})