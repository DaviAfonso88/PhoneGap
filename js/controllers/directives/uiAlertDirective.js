angular.module("ListaTelefonica").directive("uiAlert", function(){

     return{
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            topic: "=title",
            up: "=message"
            
            }
        }
        
    
    
    
  
    
   
 
})