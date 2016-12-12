(function() {
              'user strict';
              angular.module('MyFirstApp', [])
                  .controller('MyFirstController', MyController);
              MyController.$inject = ['$scope'];

              function MyController($scope) {
                  $scope.name="";
                  $scope.Check = function () {
                      if (Validation($scope.name)) {
                          Approve($scope.name);
                      } else {
                          Block();
                      }

                  };
                  function Approve(string) {
                      var count = 0;
                      for (var i = 0; i < string.length; i++) {
                          if (string[i] === ",") {
                              count++;
                          }
                      }
                      if (count < 3) {
                          $scope.display = "Enjoy!";
                      } else {
                          $scope.display = "Too much!";
                      }
                      $scope.state = true;
                  };
                  function Block() {
                      $scope.display = "Please enter data first";
                      $scope.state = false;
                  }

                  function Validation(input) {
                      if (input.length < 1) {
                          return false;
                      } else {
                          return true;
                      }
                  }
                  //function ValidInput(input) {
                  //    var lists = input.split(",");
                  //    var check = true;
                  //    for(var i=0; i<lists.length;i++)
                  //    {
                  //        if (lists[i].length < 1) {
                  //            check=false;
                  //        }
                  //    }
                  //    return check;
                  //}
                  $scope.Clear= function() {
                      $scope.display="";
                  }
              }

          })();
