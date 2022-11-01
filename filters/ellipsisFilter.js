// angular.module("ListaTelefonica").filter("ellipsis", function(){
//     return function (input){
//         if (input.length <= 30)
//            return input;
//         var output = input.substring(0,30) + "...";
//         return output;
//     };

// });

angular.module("ListaTelefonica").filter("ellipsis", function(){
    return function (input, size){
        if (input.length <= size) return input;
        var output = input.substring(0,(size || 2)) + "...";
        return output;
    };

});