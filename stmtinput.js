angular.module('nlstmt')
  .directive('stmtinput', function() {
    return {
      restrict: 'E',
      templateUrl: './nlstmt.html',
      scope: {
        'field': "@field",
        'save': '&enter'
      },
      controller: function($scope) {
        $scope.submitInput = function() {
          //console.log("Saving ", $scope.field, " => ", $scope.data);
          if ($scope.field && $scope.data) {
            $scope.save({
              field: $scope.field,
              value: $scope.data
            });
          }

        }
      }
    };
  });