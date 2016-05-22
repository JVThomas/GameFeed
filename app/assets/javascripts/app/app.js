angular
  .module('app',['ui.router','Devise','ngResource', 'ngCookies', 'ngMessages', 'templates', 'ngSanitize'])
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome',{
        url:'/',
        controller: 'WelcomeController as welcome',
        templateUrl: 'welcome/welcome.html',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (){
              $state.go('home');
            }, function (error){
              console.log(error.statusText);
            }
          );
        }]
      })
      .state('login',{
        url: '/login',
        controller: 'AuthController as authCtrl',
        templateUrl: 'auth/login.html',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (){
              $state.go('home')
            }, function (error){
              console.log(error.statusText);
            }
          );
        }]
      })
      .state('register',{
        url: '/register',
        controller: 'AuthController as authCtrl',
        templateUrl: 'auth/register.html',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (){
              $state.go('home');
            }, function (error){
              console.log(error.statusText);
            }
          );
        }]
      })
      .state('home',{
        url: '/home',
        controller: 'HomeController as home',
        templateUrl: 'home/home.html',
         onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (user){
             console.log(user);
            }, function (error){
              console.log(error.statusText);
              $state.go('welcome');
            }
          );
        }]
      })
      .state('home.searchGames',{
        url: '/search/games',
        controller: 'SearchGamesController as searchGames',
        templateUrl: 'search/searchGames.html',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (user){
             console.log(user);
            }, function (error){
              console.log(error.statusText);
              $state.go('welcome');
            }
          );
        }]
      })
      .state('home.showGame',{
        url: '/games/:id',
        controller: 'ShowGameController as showGame',
        templateUrl: 'game/showGame.html',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(
            function (user){
             console.log(user);
            }, function (error){
              console.log(error.statusText);
              $state.go('welcome');
            }
          );
        }],
        params:{
          id:null,
          link:null
        }
      });
      $urlRouterProvider.otherwise('/');
  }]);