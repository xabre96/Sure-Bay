app.controller('adminUser', function($scope, usersServices) {
  function init() {
    $scope.users = usersServices.getUsers();
  };
  $scope.fuck="fuck";
});
