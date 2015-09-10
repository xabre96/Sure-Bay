app.service('usersServices', function() {
  var users = [{
    name: 'Xan Gutierrez'
  }, {
    name: 'Ali Gutierrez'
  }];
  
  this.getUsers = function() {
    return users;
  };
});
