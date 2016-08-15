function ShowGameController ($stateParams, GiantbombService, BingService, UserGameFactory, GameFactory,Auth){
  var ctrl = this;
  ctrl.giantbomb_id = $stateParams.linkID;
  ctrl.userGame;

  ctrl.setGame = function (){
    ctrl.activePanel = 'description';

    GiantbombService.getGame(ctrl.giantbomb_id).then(function(resp){
      resp.data.results.giantbomb_id = ctrl.giantbomb_id;
      ctrl.game = GameFactory.get({giantbomb_id: ctrl.giantbomb_id}, function(game){
        
        if(game.id === undefined){
          ctrl.game = new GameFactory({game:resp.data.results});
        }
        
        ctrl.game.$save().then(function(resp){
          console.log(resp);
        },function(error){
          alert(error.statusText());
        });

      });
      ctrl.setFollowStatus();
      //if I want to maintain RESTful design, I'll need to use show to find game (if it exists)
      //if result found, render json and return, from there I can update with new data from gb
      //if result NOT found, use create to make a new game in database, then render json
      //either way, use returned data to set up gameID for userGame for easy follow/unfollow
    },function(error){
      alert(error.statusText);
    });
  }
  //might make the follow button its own directive, that way I could make a game index for followed games
  ctrl.setFollowStatus = function(){
    ctrl.userGame = UserGameFactory.get({giantbomb_id: ctrl.giantbomb_id}, function(userGame){
      debugger;
      
      if(ctrl.userGame.id === undefined){
        ctrl.userGame = new UserGameFactory({giantbomb_id: ctrl.giantbomb_id});
        ctrl.followStatus = false;
        //ctrl.userGame = new GameFactory(); ???
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

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'BingService', 'UserGameFactory', 'GameFactory','Auth'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);