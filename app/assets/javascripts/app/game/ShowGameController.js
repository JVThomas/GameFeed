function ShowGameController ($stateParams, GiantbombService){
  var ctrl = this;

  setGame();

  function setGame(){
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
    },function(error){
      alert(error.statusText);
    });
  }
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);