function HomeController($state, userGames, TwitchService, $scope){
  var ctrl = this;
  ctrl.homeStreams;
  ctrl.selectedChannel = -1;

  ctrl.selectChannel = function(index){
    ctrl.selectedChannel = index;
  }

  ctrl.setHomeStreams = function(streams){
    ctrl.homeStreams = [].concat.apply([], streams);
    ctrl.homeStreams.length > 0 ? ctrl.selectedChannel = 0 : ctrl.selectedChannel = -1;
  }

  ctrl.findHomeStreams = function(userGames){
    var requestCount = 0;
    var streams = [];
    userGames.forEach(function(userGame){
      TwitchService.getChannels(userGame.game.name, 3).then(function(success){
        success.data.streams.length > 0 ? streams.push(success.data.streams) : streams;
      },function(error){
        return true;
      }).then(function(){
        requestCount += 1;
        ctrl.AsyncCheck(userGames, requestCount,streams);
      });
    });
  }

  ctrl.AsyncCheck = function(userGames, requestCount,streams){
    if (requestCount === userGames.length){
      ctrl.setHomeStreams(streams);
    }
  }

  ctrl.findHomeStreams(userGames);

}

HomeController.$inject = ['$state', 'userGames', 'TwitchService', '$scope']

angular
  .module('app')
  .controller('HomeController',HomeController);