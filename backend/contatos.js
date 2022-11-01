const { debug } = require('console');
const express = require('express');
const { appendFile } = require('fs');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var contatos = [
  { nome: "Bruno", telefone: "9999-2222", date: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" } },
  { nome: "Sandra", telefone: "9999-3333", date: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
  { nome: "Mariana", telefone: "9999-9999", date: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular" } },

];


app.use(express.static(__dirname + '/public'));


// app.use(express.bodyParser());

var operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular" },
  { nome: "Vivo", codigo: 15, categoria: "Celular" },
  { nome: "Tim", codigo: 16, categoria: "Celular" },
  { nome: "Claro", codigo: 17, categoria: "Celular" },
  { nome: "GVT", codigo: 18, categoria: "Fixo" },
  { nome: "Embratel", codigo: 19, categoria: "Fixo" },
];

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/contatos', function (req, res) {
  res.json(contatos);
});

app.post('/contatos', function (req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function (req, res) {
  res.json(operadoras);
});

app.post('/del_contatos', function (req, res) {
  for (i = 0; i < contatos.length; i++) {
    if ((contatos[i]) === req.body)
      delete (contatos[i]);
    break;
  }
  res.send(req.body);
 

});



// app.delete('/contatos', function (req, res){
//     console.log(req.body);
//     for(i = 0; i < contatos.length; i++){
//         console.log(contatos[i].nome + contatos[i].Telefone)
//     };
//     res.end();

// for(i = 0; i < contatos.length; i++){
// Post.destroy({where: {'i': req.params.i}}).then(function(){
//     res.send("Deletado com sucesso!")
// }).catch(function(erro){
//     res.send("Um erro aconteceu!")
// });

// var contatos; 
// req = contatos.Telefone;  
// var i = 0;

// for(contatos[i]; req.body === contatos[i]; i++ )
//      contatos[i].delete(); 


//});

app.listen(process.env.PORT || 3389);

