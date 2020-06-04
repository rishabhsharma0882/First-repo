(function(){
"use strict";

angular.module('namecalculator',[])
.controller('namecalculatorcontroller',function($scope,$filter){
$scope.name="";
$scope.total=0;

$scope.displayNumeric=function(){
  $scope.total=calculate($scope.name);

};
$scope.go= function(){
  var x=$filter('uppercase');
$scope.name=x($scope.name);
};
$scope.stateofbulb="bulb off.jpg";
$scope.message=function(){
    return "Welcome dear to this angular course!";
};
$scope.change= function(){
  $scope.stateofbulb="bulb on.jpg";
}
function calculate(string)
{
var x=0;
for(var i=0;i<string.length;i++){
x+=string.charCodeAt(i);
}
  return x;
}


});



})();
