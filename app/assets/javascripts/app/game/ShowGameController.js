function ShowGameController ($stateParams, GiantbombService, BingService, GamesService, GameFactory){
  var ctrl = this;
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

  //need to set up factory function to set up follow, unfollow status
  ctrl.setFollowStatus = function(){
    GamesService.findUserGame($stateParams.linkID).then(function(resp){
      if(resp.data.length === 0){
        ctrl.followStatus = "FOLLOW";
        ctrl.userGame = new GameFactory();
      }
      else{
        ctrl.followStatus = "UNFOLLOW";
        ctrl.userGame = GameFactory.get({id: $stateParams.linkID});
      }
    });
  }

    //old code, need to determine if I really need this
    //service method is still good to retreive data, just don't need the functionality right now
    //ctrl.userGames = GamesService.getUserGames();
    //for (i = 0 ; i < ctrl.userGames.length - 1; i++){
    //  if(ctrl.userGames[i].giantbomb_id === $stateParams.linkID){
    //    ctrl.gameID = ctrl.userGames.id;
    //    ctrl.followedBool = true;
    //    break;
    //  }
    //}
  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'BingService', 'GamesService', 'GameFactory'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);