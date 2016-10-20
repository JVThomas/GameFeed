function HomeController($state, userGames, TwitchService, $scope, $timeout){
  var ctrl = this;
  ctrl.homeStreams;
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

  ctrl.findHomeStreams = function(userGames){
    var requestCount = 0;
    var streams = [];
    userGames.forEach(function(userGame){
      TwitchService.getChannels(userGame.game.name, 3).then(function(success){
        success.data.streams.length > 0 ? streams.push(success.data.streams) : streams;
      },function(error){
        console.log(error.statusText);
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

HomeController.$inject = ['$state', 'userGames', 'TwitchService', '$scope', '$timeout']

angular
  .module('app')
  .controller('HomeController',HomeController);