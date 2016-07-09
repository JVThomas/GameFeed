function ShowGameController ($stateParams, GiantbombService, BingService){
  var ctrl = this;

  ctrl.setGame = function (){
    ctrl.activePanel = 1;  
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
    },function(error){
      alert(error.statusText);
    });
  }
  
  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'BingService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);