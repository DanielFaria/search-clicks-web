//Criando um módulo.
//Common js padrão para disponibilizar módulos

//Comportamento Singleton, é isso mesmo?
//Pool de conexão de banco eu poderia montar assim?
var express = require('express');
var load = require('express-load');
var bodyParser  = require('body-parser');
var expressValidator = require('express-validator');


module.exports  =  function(){
	//Carregando a varíavel do express o tempo  inteiro, isso não é necessário...
	//var express = require('express');
	//var app     = express();
	//app.set('view engine', 'ejs');
    var app =  express();
    app.use(express.static('./app/public'));
    //Capacidade de interpretar um combo no formulario
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

   
    

	//app.set('view engine', 'ejs');
	//Isso não pe require
	//app.set('views', './app/views');

	load('routes', {cwd: 'app'})
	.into(app);
    
    /*
    app.use(function(req, res, next) {
       res.status(404).render('erros/404');
    });

    app.use(function(erros,req, res, next) {
       res.status(500).render('erros/500');
    });
    */
	console.log("Carregando o arquivo  de configuração");
	return app;
}