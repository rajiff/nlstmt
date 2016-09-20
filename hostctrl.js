angular.module('nlstmt').controller('hostctrl', ['$scope',
	function($scope) {
    $scope.fieldData = {};

    $scope.updateField = function(field, value) {
      $scope.fieldData[field] = value;
    }

    $scope.save = function() {
      console.log($scope.fieldData);
      //$http
    }
}])