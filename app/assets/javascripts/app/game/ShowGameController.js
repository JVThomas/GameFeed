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
        ctrl.followStatus = false;
        //ctrl.userGame = new GameFactory();
        //send game information to backend and check for game existence there? Either way, association has to be created
        //should there be a seperate follow route? Or should I implement via traditional REST?
      }
      else{
        ctrl.followStatus = true;
        //ctrl.userGame = GameFactory.get(resp.data.game_id);
        //when unfollowing, need to delete association from backend
        //should I make a seperate unfollow route? or should I find a way to implement with traditional REST?
      }
    });
  }
  
  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'BingService', 'GamesService', 'GameFactory'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);