angular.module("ListaTelefonica").filter("name", function(){
    return function(input){
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(function(nome){
            if( nome === "da" || nome === "de")  return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();

        });
        return listaDeNomesFormatada.join(" ");
    };
});

// angular.module("listTelefonica").filter("name", function(){
//     return function(input){
//         var listaDeNomes = input.split(" ");
//         var listaDeNomesFormatada = listaDeNomes.map(function(nome){
//             if(/(da|de)/.test(nome)) return nome;
//                 return nome;
//         return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();

//         });
//         return listaDeNomesFormatada.join(" ");
//     }
// });