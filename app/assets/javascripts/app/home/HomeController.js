function HomeController(UserGameFactory, TwitchService, $timeout){
  var ctrl = this;
  ctrl.homeStreams;
  ctrl.userGames;
  ctrl.selectedStreamIndex = undefined;
  ctrl.selectedStream = undefined;
  ctrl.showVideo = false;

  ctrl.selectStream = function(index){
    if (index !== ctrl.selectedStreamIndex){
      ctrl.showVideo = false;
      $timeout(function(){
        ctrl.selectedStream = ctrl.homeStreams[index].channel.name;
        ctrl.selectedStreamIndex = index;
        ctrl.showVideo = true;
      },500);
    }
  }

  ctrl.setHomeStreams = function(streams){
    ctrl.homeStreams = [].concat.apply([], streams);
    ctrl.homeStreams.length > 0 ? ctrl.selectedStreamIndex = 0 : ctrl.selectedStreamIndex;
    ctrl.selectedStream = ctrl.homeStreams[0].channel.name
    ctrl.showVideo = true;
  }

  ctrl.getUserGames = function(){
    UserGameFactory.query({}).then(function(userGames){
      ctrl.userGames = userGames;
      ctrl.sendStreamRequest();
    });
  }

  ctrl.AsyncCheck = function(userGames, requestCount,streams){
    if (requestCount === userGames.length){
      ctrl.setHomeStreams(streams);
    }
  }

  ctrl.sendStreamRequest = function(){
    var requestCount = 0;
    var streams = [];
    ctrl.userGames.forEach(function(userGame){
      TwitchService.getChannels(userGame.game.name, 3).then(function(success){
        success.data.streams.length > 0 ? streams.push(success.data.streams) : streams;
      },function(error){
        console.log(error.statusText);
        return true;
      }).then(function(){
        requestCount += 1;
        ctrl.AsyncCheck(ctrl.userGames, requestCount,streams);
      });
    });
  }

  ctrl.findHomeStreams = function(){
    ctrl.getUserGames();
  }

  ctrl.findHomeStreams();

}

HomeController.$inject = ['UserGameFactory', 'TwitchService', '$timeout']

angular
  .module('app')
  .controller('HomeController',HomeController);