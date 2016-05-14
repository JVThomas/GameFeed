function SearchGamesController(GiantbombService, $rootScope){
  var ctrl = this;
  ctrl.gameList = []
  ctrl.panelToggle = false;

  this.findGame = function($rootScope){
    ctrl.gameList = GiantbombService.getGames(ctrl.query).then(function(results){
      $rootScope.$broadcast('results', results);
      ctrl.panelToggle = true;
    }, function(error){
      alert(error.statusText);
    });
  }
}

angular
  .module('app')
  .controller('SearchGamesController', SearchGamesController);