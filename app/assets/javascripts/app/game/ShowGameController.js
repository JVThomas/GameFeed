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
      debugger;
    },function(error){
      alert(error.statusText);
    });
  }
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'TwitchService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);