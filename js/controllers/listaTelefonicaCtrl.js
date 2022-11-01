angular.module("ListaTelefonica", ["ngMessages"]);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function ($scope, $http, contatosAPI, operadorasAPI) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    $scope.operadoras = [];


    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;


        }).catch(function (response) {


            $scope.error = "Não foi possível carregar os dados!";
            $scope.message = "Ops, aconteceu um problema!";


        });
    };


    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;

        });
    };

    $scope.adicionarContato = function (contato) {
        contato.date = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            $scope.contatos = response.data;
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });


    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });

        $http.delete("http://localhost:3389/del_contatos", contato).then(function (response) {
            $scope.contatos = response.data;
        });



    };


    $scope.isContatoSelecionado = function (contatos) {
        return [...contatos].some(function (contato) {
            return contato.selecionado;
        });


    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao

    };
    $scope.classe = "selecionado";

    carregarContatos();
    carregarOperadoras();




});



    //     var carregarContatos = function(){

    //         $http.get("http://localhost:3412/contatos").then(function(response){
    //         $scope.contatos = response.data;
    //         // console.log(response.data)
    //     });
    // };
    //     var carregarOperadoras = function(){
    //         $http.get("http://localhost:3412/operadoras").then(function(response){
    //             $scope.operadoras = response.data;
    //              console.log(response.data);
    //         });
    //     };

    //     $scope.adicionarContato = function(contato){
    //         contato.date = new Date();
    //         console.log(contato);
    //         $http.post("http://localhost:3412/contatos", contato).then(function(response){
    //             delete $scope.contato;
    //             carregarContatos();
    //         });
    //     };