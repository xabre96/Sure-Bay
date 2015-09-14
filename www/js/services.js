angular.module('starter.services', ['ngResource'])
.factory('usersService', function($resource) {
  var users = [{
    name: 'Xan Gutierrez'
  }, {
    name: 'Ali Gutierrez'
  }];

  return {
		getUsers: function(){
			// return $http.get("http://localhost:8100/users").then(function(response){
			// 	users = response;
				return users;
			//});
		}
	}

  //  return $resource('http://localhost:8100/users').then(function(response){
 // 				users = response;
 // 				return users;
 // 			});
      // this.getUsers = function(){
      //   return users;
      // };
});
