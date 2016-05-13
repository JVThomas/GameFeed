function SearchController(GiantbombService){
  var ctrl = this;
  ctrl.gameList = []

  this.findGame = function(){
    ctrl.gameList = GiantbombService.getGames(ctrl.query).then(function(results){
      debugger;
    }, function(error){
      alert(error.statusText);
    });
  }
}

angular
  .module('app')
  .controller('SearchController', SearchController);