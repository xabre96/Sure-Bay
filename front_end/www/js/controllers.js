angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //users
  $scope.users = [];
  $http.get('http://localhost/surebay/back_end/users').then(function(resp) {
    console.log('Success', resp);
    $scope.users = resp.data;
  }, function(err) {
    console.error('ERR', err);
  });

  $scope.updateProfile = function() {
    $state.go("updateUser");
  };

  $scope.updateProfile2 = function() {

  };

  $scope.logout = function() {
    $state.go("login");
  };

  $scope.userAdd = function(user) {
    $http.post('http://localhost/surebay/back_end/users', user).then(function(resp) {
      console.log('Success', resp);
      reset(user);
    }, function(err) {
      console.error('ERR', err);
    });
  };

  var reset = function(user) {
    user.firstName = "";
    user.lastName = "";
    user.userName = "";
    user.passWord = "";
    user.email = "";
    user.address = "";
    user.userType = "";
    user.birthday = "";
    document.getElementsByTagName('checkbox').checked = false;
  };
})
.controller('loginController', function($scope, $ionicModal, $timeout, $location, $http, $stateParams, $ionicPopup, $state) {
  $scope.logIn = function(user) {
    // var user2 = user;
    var passWord = CryptoJS.SHA512(user.passWord);
    user.passWord = "" + passWord;
    // user.passWord = user.passWord;
    $http.post('http://localhost/surebay/back_end/login', user).then(function(resp) {
      console.log(resp);
      if(resp.data[0].user_type==1){
             $state.go("app.home");
             user.userName = "";
             user.passWord = "";
         }
         else{
           $state.go("user");
           user.userName = "";
           user.passWord = "";
         }
    }, function(err) {
      console.error('ERR', err);
        $scope.message = "Username and Password are incorrect.";
    });
  };
})
.controller('userController', function($scope, $ionicModal, $timeout, $location, $http, $stateParams, $ionicPopup) {
  $scope.user = [];
  var xx = this;
  $http.get('http://localhost/surebay/back_end/users/' + $stateParams.user_id).then(function(resp) {
    console.log('Success', resp);
    $scope.user = resp.data;
  }, function(err) {
    console.error('ERR', err);
  });

  $scope.formatDate=function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return date = [year, month, day].join('-');
}

  $scope.updateUser = function(id, user){
    user.birthday=$scope.formatDate(user.birthday);
    $http.put('http://localhost/surebay/back_end/users/' + $stateParams.user_id, user).then(function(resp) {
      console.log('Success', resp);
      var alertPopup = $ionicPopup.alert({
        title: 'Success',
        template: 'User successfully updated!'
      });
      alertPopup.then(function(res) {
      });

    }, function(err) {
      console.error('ERR', err);
      var alertPopup = $ionicPopup.alert({
        title: 'Oops something happened...',
        template: 'Error. User deletion failed.'
      });
      alertPopup.then(function(res) {});
    });
  };

  $scope.deleteUser = function(id) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'User Deletion',
        template: 'Are you sure you want to delete this account?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          $http.delete('http://localhost/surebay/back_end/users/'+id).then(function(resp) {
            console.log('Success', resp);
            var alertPopup = $ionicPopup.alert({
              title: 'Success',
              template: 'User successfully deleted!'
            });
            alertPopup.then(function(res) {});
            $location.path("/app/users");
            window.location.reload();
          }, function(err) {
            console.error('ERR', err);
            var alertPopup = $ionicPopup.alert({
              title: 'Oops something happened...',
              template: 'Error. User deletion failed.'
            });
            alertPopup.then(function(res) {});
          });
        } else {
          // On Cancel Update Value

        }
      });
  };
  xx.state = "Deactivated"
  xx.activateAccount = function(sta) {
    stat = [{type:1}];
    $http.put('http://localhost/surebay/back_end/users/' + $stateParams.user_id, stat).then(function(resp) {
      console.log('Success', resp);
    }, function(err) {
      console.error('ERR', err);
        xx.state = "Deactivated";
        return xx.state;

    });
    // if (sta == 'Activated') {
    //   var confirmPopup = $ionicPopup.confirm({
    //     title: 'User Activation',
    //     template: 'Are you sure you want to activate this account?'
    //   });
    //   confirmPopup.then(function(res) {
    //     if (res) {
        //   stat = [{type:1}];
        //   $http.put('http://localhost/surebay/back_end/users/' + $stateParams.user_id, stat).then(function(resp) {
        //     console.log('Success', resp);
        //     // $scope.user.user_type = 1;
        //     var alertPopup = $ionicPopup.alert({
        //       title: 'Success',
        //       template: 'User successfully activated!'
        //     });
        //     alertPopup.then(function(res) {});
        //   }, function(err) {
        //     console.error('ERR', err);
        //     // var alertPopup = $ionicPopup.alert({
        //     //   title: 'Oops something happened...',
        //     //   template: 'Error. User activation failed.'
        //     // });
        //     // alertPopup.then(function(res) {
        //       xx.state = "Deactivated";
        //       return xx.state;
        //     // });
        //   });
        // } else {
        //   // On Cancel Update Value
        //   xx.state = "Deactivated";
        //   return xx.state;
        // }
    //   });
    // }
  };

});
