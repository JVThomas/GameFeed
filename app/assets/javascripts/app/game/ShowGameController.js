function ShowGameController ($stateParams, GiantbombService, TwitchService){
  var ctrl = this;

  setGame();

  function setGame(){
    ctrl.activePanel = true;
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
      findChannels(ctrl.game.name);
    },function(error){
      alert(error.statusText);
    });
  }

  function findChannels(title){
    TwitchService.getChannels(title).then(function(resp){
      ctrl.nextLink = resp.data._links.next;
      ctrl.prevLink = resp.data._links.prev;
      debugger;
      ctrl.streams = resp.data.streams;
    },function(error){
      alert(error.statusText);
    });
  }

  function nextChannels(nextLink){
    debugger;
    ctrl.channelPagination(nextLink)
  }

  function prevChannels(prevLink){
    debugger;
    ctrl.channelPagination(prevLink)
  }

  function channelPagination(link){
    debugger;
    TwitchService.channelPagination(link).then(function(resp){
      }, function(error){
        ctrl.streams = resp.streams
        alert(error.statusText);
      });  
    }
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'TwitchService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);