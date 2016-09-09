(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.name="";
    $scope.message = "";

    $scope.checkIfTooMuch = function (){
        var dishes = $scope.name.split(",");
        var noOfDishes = dishes.length;
        if(noOfDishes <= 3){
          if (noOfDishes == 1 && dishes[0].trim().length==0 ) {
            $scope.message = "Please enter data first";
          } else {
            $scope.message = "Enjoy!";
          }

        } else if (noOfDishes > 3) {
          $scope.message = "Too much!";
        }
    }
}
})();
