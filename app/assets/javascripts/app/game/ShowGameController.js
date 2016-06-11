function ShowGameController ($stateParams, GiantbombService, TwitchService){
  var ctrl = this;

  ctrl.setGame = function (){
    ctrl.activePanel = true;
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
      ctrl.findChannels(ctrl.game.name);
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.findChannels = function(title){
    TwitchService.getChannels(title).then(function(resp){
      ctrl.setLinks(resp.data._links);
      ctrl.streams = resp.data.streams;
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.channelPagination = function(link){
    TwitchService.channelPagination(link).then(function(resp){
      ctrl.setLinks(resp.data._links);
      ctrl.streams = resp.data.streams
    }, function(error){
      alert(error.statusText);
    });  
  }

  ctrl.setLinks = function(links){
    debugger;
    ctrl.nextLink = links.next;
    ctrl.prevLink = links.prev;
  }

  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'TwitchService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);