angular.module('starter.services', ['ngResource'])
  .service('usersService', function($resource) {

    //var factory = {};
    var users = [{
      firstname: 'Croiche Jom',
      lastname: 'Cabotaje',
      username: 'cjim',
      password: '123',
      email: 'cjim@gmail.com',
      address: 'El Salvador City',
      birthday:'December 10, 1995',
      usertype: 'Admin'
    },{
      firstname: 'Sheen',
      lastname: 'Gulay',
      username: 'sharp nectie',
      password: '123',
      email: 'sharp@gmail.com',
      address: 'CDO City',
      birthday:'November 4, 1995',
      usertype: 'Admin'
    },{
      firstname: 'Xan',
      lastname: 'Gutierrez',
      username: 'xan',
      password: '123',
      email: 'xan@gmail.com',
      address: 'Camiguin',
      birthday:'September 8, 1996',
      usertype: 'Admin'
    },
     {
      firstname: 'Nova',
      lastname: 'Kho',
      username: 'cjim',
      password: '123',
      email: 'nova@gmail.com',
      address: 'CDO City',
      birthday:'October 10, 1995',
      usertype: 'Admin'
    }];

    //  return {
    this.getUsers = function() {
      // return $http.get("http://localhost:8100/users").then(function(response){
      // 	users = response;
      return users;
      //});
    };

    this.insertUser = function(firstName, lastName, userName, passWord, email, address, birthday, userType) {
      // var newID = users.length + 1;

      users.push({
        // id: newID,
        firstname: firstName,
        lastname: lastName,
        // username: userName,
        // email: email,
        // password: passWord,
        // address: address,
        // birthday: birthday,
        usertype: userType
      });

    };
    //  }

    // this.updateUser = function(firstName, lastName, userName, emailAddress, password, type, key){
    //     user[key].firstname= firstName;
    //     user[key].lastname= lastName;
    //     user[key].username= userName;
    //     user[key].email= emailAddress;
    //     user[key].password= password;
    //     user[key].userType= type;
    // };
    //
    // this.deleteUser = function(key) {
    //     user.splice(key, 1);
    // };

  });
