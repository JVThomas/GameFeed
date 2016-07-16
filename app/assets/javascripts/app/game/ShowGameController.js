function ShowGameController ($stateParams, GiantbombService, BingService, GamesService){
  var ctrl = this;
  ctrl.gameID = undefined;
  ctrl.userGame;

  ctrl.setGame = function (){
    ctrl.activePanel = 1;  
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
      ctrl.setFollowStatus();
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.setFollowStatus = function(){
    ctrl.followedBool = false;
    ctrl.userGames = GamesService.getUserGames();
    for (i = 0 ; i < ctrl.userGames.length - 1; i++){
      if(ctrl.userGames[i].giantbomb_id === $stateParams.linkID){
        ctrl.gameID = ctrl.userGames.id;
        ctrl.followedBool = true;
        break;
      }
    }
  }

//note -> need to finish follow Game function, need to see if factory works, need to see if follow status works
  ctrl.followGame = function(){
    ctrl.followedBool = !ctrl.followedBool;
    if(ctrl.gameID !== undefined){
      userGame = new GameFactory();
    }
    else{
      userGame = GameFactory.get({id: ctrl.gameID});
    }

  }
  
  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'BingService', 'GamesService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);