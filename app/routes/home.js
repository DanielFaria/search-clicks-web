/**
Os Middlewares são funções cujo objetivo é possibilitar a interceptação do request e adicionar verificações e comportamentos sobre eles.
Vários plugins que utilizamos na aplicação junto do express fazem uso dos middlewares. É o caso do bodyparser ou do express-validator, para citar dois exemplos.
**/

module.exports = function(app)  {
    app.get('/',function(req,res,next ){
          
    });  
}