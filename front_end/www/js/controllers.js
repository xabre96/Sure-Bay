angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $http, $state, $ionicPopup) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.users = [];
    if (localStorage.getItem("credential_userid") === null || localStorage.getItem("credential_password") === null) {
      $state.go("login");
      // location.reload();
    } else {
      $scope.username = localStorage.getItem("credential_username");
      $scope.id = localStorage.getItem("credential_userid");
      $http.get('http://localhost/surebay/back_end/users').then(function(resp) {
        console.log('Success', resp);
        $scope.users = resp.data;
      }, function(err) {
        console.error('ERR', err);
      });

      $scope.updateProfile = function(id) {
        $state.go("updateUser/" + id);
      };

      $scope.logout = function() {
        localStorage.clear();
        $state.go("login");
        location.reload();
      };

      $scope.surveyAdd = function(survey) {
        console.log(survey);
      };

      $scope.userAdd = function(user) {
        if (user.firstName == null || user.lastName == null || user.userName == null || user.email == null || user.address == null || user.birthday == null || user.userType==null) {
          $scope.message="Please fill all required fields.";
        } else {
          var pass = ""+123;
          var passWord = CryptoJS.SHA512(pass);
          user.passWord = ""+passWord;
          $http.post('http://localhost/surebay/back_end/users', user).then(function(resp) {
            console.log('Success', resp);
            reset(user);
            var alertPopup = $ionicPopup.alert({
              title: 'Success',
              template: 'User successfully Created!'
            });
            alertPopup.then(function(res) {
              $state.go("app.users");
              location.reload();
            });
          }, function(err) {
            console.error('ERR', err);
          });
        };
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
      };
    }
  })

  .controller('loginController', function($scope, $ionicModal, $timeout, $location, $http, $stateParams, $ionicPopup, $state) {

    if (localStorage.getItem("credential_userid") != null || localStorage.getItem("credential_password") != null) {
      $state.go("app.home");
      location.reload();
    } else {
    $scope.logIn = function(user) {
      // var user2 = user;
      var passWord = CryptoJS.SHA512(user.passWord);
      user.passWord = "" + passWord;
      // user.passWord = user.passWord;
      $http.post('http://localhost/surebay/back_end/login', user).then(function(resp) {
        console.log(resp);
        if (resp.data[0].user_type == 1) {
          $state.go("app.home");
          user.userName = "";
          user.passWord = "";
        } else {
          $state.go("home");
          user.userName = "";
          user.passWord = "";
        }
        localStorage.setItem("credential_userid", resp.data[0].user_id);
        localStorage.setItem("credential_password", resp.data[0].password);
        localStorage.setItem("credential_username", resp.data[0].username);
        //          localStorage.getItem("lastname");
        // localStorage.removeItem("lastname");
      }, function(err) {
        console.error('ERR', err);
        user.userName = "";
        user.passWord = "";
        $scope.message = "Username and Password are incorrect.";
      });
    };
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
    $scope.id = $stateParams.user_id;
    $scope.formatDate = function(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return date = [year, month, day].join('-');
    }

    $scope.changePass = function(id, pass){
      if(pass.old==null||pass.new==null||pass.new2==null){
        $scope.message = "Please fill up all required fields";
        pass.old = "";
        pass.new = "";
        pass.new2="";
      }else{
      var passWord = CryptoJS.SHA512(pass.old);
      pass.old = "" + passWord;
      if(pass.old!=localStorage.getItem("credential_password")){
        $scope.message = "The password does not match the Old Password";
        pass.old = "";
        pass.new = "";
        pass.new2="";
      }
      else{
        if(pass.new!=pass.new2){
          $scope.message = "Password does not match.";
          pass.old = "";
          pass.new = "";
          pass.new2="";
        }else{
          passWord = CryptoJS.SHA512(pass.new2);
          pass.new2 = "" + passWord;
          $http.put('http://localhost/surebay/back_end/login/' + $stateParams.user_id, pass).then(function(resp) {
            console.log('Success', resp);
            pass.old = "";
            pass.new = "";
            pass.new2="";
            var alertPopup = $ionicPopup.alert({
              title: 'Success',
              template: 'Password changed!'
            });
            alertPopup.then(function(res) {
            });
          }, function(error) {
            console.log(error);
            var alertPopup = $ionicPopup.alert({
              title: 'Oops something happened...',
              template: 'Error. Password Changing failed.'
            });
            alertPopup.then(function(res) {});
            pass.old = "";
            pass.new = "";
            pass.new2="";
          }
        );
        }
      }
      }
    };

    $scope.updateUser = function(id, user) {
      user.birthday = $scope.formatDate(user.birthday);
      $http.put('http://localhost/surebay/back_end/users/' + $stateParams.user_id, user).then(function(resp) {
        console.log('Success', resp);
        localStorage.credential_username =  user.userName;
        var alertPopup = $ionicPopup.alert({
          title: 'Success',
          template: 'User successfully updated!'
        });
        alertPopup.then(function(res) {
          location.reload();
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
          $http.delete('http://localhost/surebay/back_end/users/' + id).then(function(resp) {
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
      stat = [{
        type: 1
      }];
      $http.put('http://localhost/surebay/back_end/users/user/' + $stateParams.user_id, stat).then(function(resp) {
        console.log('Success', resp);
      }, function(err) {
        console.error('ERR', err);
        xx.state = "Deactivated";
      });
    //     return xx.state;
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
