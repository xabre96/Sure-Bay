angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, usersService, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //users

  $scope.users = usersService.getUsers();

  $scope.updateProfile = function(){
    $state.go("updateUser");
  };

  $scope.updateProfile2 = function(){
    
  };

  $scope.logout= function(){
    $state.go("login");
  };

  $scope.logIn = function(user) {
      var num = $scope.users.length;
      for (var x = 0; x < num; x++) {
        tempUser = $scope.users[x].username;
        tempPass = $scope.users[x].password;
        if (tempUser === user.userName && tempPass === user.passWord) {
          if($scope.users[x].usertype=='Admin'){
              $state.go("app.home");
              user.userName = "";
              user.passWord = "";
          }
          else{
            $state.go("user");
            user.userName = "";
            user.passWord = "";
          }
          break;
        }
      }
      if (tempUser !== user.userName && tempPass !== user.passWord) {
        $scope.message = "Username and Password are incorrect.";
      }

      if(user.userName == "" && user.passWord == ""){
        $scope.message="";
      }
      num = "";
  };

  $scope.userAdd = function(user){
    usersService.insertUser(
      user.firstName,
      user.lastName,
      user.userName,
      user.passWord,
      user.email,
      user.address,
      user.birthday,
      user.userType
    );
    user.firstName="";
    user.lastName="";
    user.userName="";
    user.passWord="";
    user.email="";
    user.address="";
    user.userType="";
  };




  // Form data for the login modal
  // $scope.loginData = {};

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };
  //
  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };
  //
  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);
  //
  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })
//
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });
