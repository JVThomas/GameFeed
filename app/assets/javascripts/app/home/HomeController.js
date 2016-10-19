function HomeController($state, userGames, TwitchService, $scope){
  var ctrl = this;
  ctrl.user;
  ctrl.display = true;
  ctrl.userGames = userGames;
  ctrl.homeStreams;
  ctrl.selectedChannel = -1;
  ctrl.requestBool = 0;
  ctrl.requestUpperBound = ctrl.userGames.length + 1
  
  ctrl.setHomeStreams = function(){
    results = [];  
    ctrl.userGames.forEach(function(userGame){
      TwitchService.getChannels(userGame.game.name, 3).then(function(success){
        success.data.streams.length > 0 ? results.push(success.data.streams) : results;
        ctrl.requestBool += 1;
      },function(error){
        console.log(error.statusText());
        ctrl.requestBool += 1; 
      });
    });
    ctrl.homeStreams = [].concat.apply([], ctrl.homeStreams);
    ctrl.requestBool += 1;
    ctrl.homeStreams.length > 0 ? ctrl.selectedChannel = 0 : ctrl.selectedChannel;
  }

  ctrl.selectChannel = function(index){
    ctrl.selectedChannel = index;
  }

  ctrl.setHomeStreams();
}

HomeController.$inject = ['$state', 'userGames', 'TwitchService', '$scope']

angular
  .module('app')
  .controller('HomeController',HomeController);