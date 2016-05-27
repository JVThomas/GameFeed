function ShowGameController ($stateParams, GiantbombService){
  var ctrl = this;

  setGame();

  function setGame(){
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      debugger;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
    },function(error){
      alert(error.statusText);
    });
  }
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);