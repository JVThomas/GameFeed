function HomeController($state, userGames, TwitchService, BingService){
  var ctrl = this;
  ctrl.user;
  ctrl.display = true;
  ctrl.userGames = userGames;
  ctrl.selectedStreamGame;
  ctrl.selectedNewsGame;

  //ctrl.setSelectedStreamGame
  //allows users to select game from drop down menu
  //with each selection the app will retreive streams via twitch
  //remember to use $scope and $scope.apply to update new streams

  //ctrl.setChannel
  //looking like a method bound to a click event
  //will have to push the channel name to twitch video component on click
  //use variable and scope.apply to control data change

  //ctrl.setSelectedNewsGame
  //more or less the same as selectedStreamGame, but with Bind instead of twitch
  //scope and apply are required as well

}

HomeController.$inject = ['$state', 'userGames', 'TwitchService', 'BingService']

angular
  .module('app')
  .controller('HomeController',HomeController);