/*function receivesAfunction(callBack){
     callBack();
}

receivesAfunction(function(){
    return "run"
})*/
function receivesAFunction(callBack){
    callBack();
 }
 receivesAFunction(function(){return "hey"})
 
    function returnsANamedFunction() {
         function xyz(){
            return "hello"
        }
        return xyz;
    }

    function returnsAnAnonymousFunction (){
      return function (){ return "hello"}
      
    }


