angular
  .module('app',['ui.router','Devise','ngResource', 'ngCookies', 'ngMessages', 'templates', 'ngSanitize'])
  .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',   // trust all resources from the same origin
        '*://player.twitch.tv/**'   // trust all resources from `www.player.twitch.tv`
    ]);
    $stateProvider
      .state('welcome',{
        url:'/',
        controller: 'WelcomeController as welcomeCtrl',
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
        resolve:{
          userGames: ['UserGameFactory', function(UserGameFactory){
            return UserGameFactory.query().$promise.then(function(userGames){
              return userGames;
            });
          }]
        }, 
        url: '/home',
        controller: 'HomeController as homeCtrl',
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
      .state('searchGames',{
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
      .state('showGame',{
        url: '/games/:linkID',
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
        }]
      });
      $urlRouterProvider.otherwise('/');
  }]);