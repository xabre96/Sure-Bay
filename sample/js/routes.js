angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      // controller: 'homeCtrl'
    })

    .state('createSurvey', {
      url: '/page7',
      templateUrl: 'templates/createSurvey.html',
      // controller: 'createSurveyCtrl'
    })

    .state('settings', {
      url: '/page8',
      templateUrl: 'templates/settings.html',
      // controller: 'settingsCtrl'
    })


    .state('profile', {
      url: '/page9',
      templateUrl: 'templates/profile.html',
      // controller: 'profileCtrl'
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
