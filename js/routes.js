angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.packages', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/packages.html',
        controller: 'packagesCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.historyOfIOS', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historyOfIOS.html',
        controller: 'historyOfIOSCtrl'
      }
    }
  })

  .state('menu.scenic', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/scenic.html',
        controller: 'scenicCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});