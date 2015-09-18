// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/admin/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.users', {
    url: '/users',
    views: {
      'users': {
        templateUrl: 'templates/admin/users.html'
      }
    }
  })

  .state('viewUser', {
    url: '/viewUser',
    templateUrl: 'templates/admin/viewUser.html',
    controller: 'AppCtrl'
  })

  .state('app.surveys', {
    url: '/surveys',
    views: {
      'surveys': {
        templateUrl: 'templates/admin/surveys.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/admin/home.html'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'account': {
        templateUrl: 'templates/admin/account.html'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html'
  })

  .state('register2', {
    url: '/register2',
    templateUrl: 'templates/admin/register.html',
    controller: 'AppCtrl'
  })
  .state('user', {
    url: '/user',
    templateUrl: 'templates/user/user.html'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
