var app = angular.module('myModule');
app.factory('nameFactory',function(){

var myObj={};

var setInput=function(inputName){
myObj.name=inputName;

};

var setOutput = function(){
  return myObj;

};
return {
  setInput: setInput,
  setOutput: setOutput
};
});
