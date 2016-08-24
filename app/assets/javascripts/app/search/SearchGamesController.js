function SearchGamesController(GiantbombService, $rootScope){
  var ctrl = this;
  ctrl.query;
  ctrl.panelToggle = false;
  ctrl.loading = false;
  
  ctrl.findGame = function(){
    ctrl.loading = true;
    GiantbombService.getGames(ctrl.query).then(function(results){
      $rootScope.$broadcast('results', results);
      ctrl.loading = false;
      ctrl.panelToggle = true;
    }, function(error){
      alert(error.statusText);
    });
  }
}

angular
  .module('app')
  .controller('SearchGamesController', SearchGamesController);