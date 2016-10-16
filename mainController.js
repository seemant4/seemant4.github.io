var myApp = angular.module('MyApp',['ngMaterial','ngMessages']);
myApp.controller('mycontroller',function($scope){

  $scope.dir = false;

  $scope.changeorder = function(orderparam){
    // console.log("this is called when the th is clicked");
    $scope.myorder = orderparam;
    $scope.dir = !$scope.dir;
  }

  //code to get the data from the database mostly in the form of objects array
  // var data=[
  //              {
  //                 "name":"Seemant Sekhar",
  //                 "age":24,
  //                 "nickName":"Chanchal",
  //                 "employee":true
  //              },{
  //                 "name":"Abhinav Ashesh",
  //                 "age":25,
  //                 "nickName":"Babu",
  //                 "employee":true
  //              },{
  //                 "name":"Shashank Sekhar",
  //                 "age":26,
  //                 "nickName":"Atul",
  //                 "employee":true
  //              },{
  //                 "name":"Sweta Tiwary",
  //                 "age":25,
  //                 "nickName":"Minu",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Satish",
  //                 "age":25,
  //                 "nickName":"Sattyda",
  //                 "employee":true
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Abhinav",
  //                 "age":25,
  //                 "nickName":"Gaiya",
  //                 "employee":true
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },{
  //                 "name":"Surabhi",
  //                 "age":22,
  //                 "nickName":"Gaiya",
  //                 "employee":false
  //              },
  //            ];
    $scope.persons= data;
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = data;
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);
    }
});

myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});


myApp.filter('myFilter',function(){
  return function(persons,name,age,name1,age1){
    console.log(name);
    var checkName = (name !== undefined && name !== "")?true:false;
    var checkAge = (age !== undefined && age !== "")?true:false;
    var checkName1 = (name1 !== undefined && name1 !== "")?true:false;
    var checkAge1 = (age1 !== undefined && age1 !== "")?true:false;

    console.log("checkName",checkName);
    console.log("checkAge",checkAge);
    console.log("checkName1",checkName1);
    console.log("checkAge1",checkAge1);
    //taking four at a time
    if(checkName && checkAge && checkName1 && checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 && persons[i].age >= age) || (persons[i].name.indexOf(name1) != -1 && persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
        }
      return filtered;
    }

    //taking three at a time
    else if(checkName && checkAge && checkName1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 && persons[i].age >= age) || (persons[i].name.indexOf(name1) != -1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName && checkAge &&  checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 && persons[i].age >= age) || (persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName && checkName1 &&  checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1) || (persons[i].name.indexOf(name1) != -1 && persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName1 && checkAge &&  checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].age >= age) || (persons[i].name.indexOf(name1) != -1 && persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }

    //taking two at a time
    else if(checkName && checkAge){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 && persons[i].age >= age)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkAge && checkName1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name1) != -1 || persons[i].age >= age)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName1 && checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name1) != -1 && persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName && checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 || persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName && checkName1){
      console.log("we are here");
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1 || persons[i].name.indexOf(name1) != -1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkAge && checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].age >= age || persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }

    //taking one at a time
    else if(checkName){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name) != -1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkAge){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].age >= age)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkName1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].name.indexOf(name1) != -1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else if(checkAge1){
      var filtered =[];
      for(var i=0;i<persons.length;i++){
          if((persons[i].age >= age1)){
            filtered.push(persons[i]);
          }
      }
      return filtered;
    }
    else{
      return persons;
    }
  }

});
