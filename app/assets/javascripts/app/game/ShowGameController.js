function ShowGameController ($stateParams, $state, GiantbombService, BingService, UserGameFactory, GameFactory){
  var ctrl = this;
  ctrl.giantbomb_id = $stateParams.linkID;
  ctrl.userGame;

  ctrl.setGame = function (){
    ctrl.activePanel = 'description';

    GiantbombService.getGame(ctrl.giantbomb_id).then(function(resp){
      ctrl.data = resp.data.results;
      ctrl.data.giantbomb_id = ctrl.giantbomb_id;
      ctrl.game = GameFactory.get({giantbomb_id: ctrl.giantbomb_id}, function(game){
        if(game.id === undefined){
          ctrl.createGameFactory();
        }else{
          ctrl.updateGameFactory();
        } 
      });
    },function(error){
      ctrl.game = GameFactory.get({giantbomb_id: ctrl.giantbomb_id}, function(game){
        if(game.id === undefined){
          alert("Oops! Something went wrong with the Giantbomb API! Returning to Search page");
          $state.go('home.searchGames');
        }else{
          ctrl.data = game;
          ctrl.data.image.icon_url = game.image_link;
          ctrl.setFollowStatus();
        }
      });
    });
  }
  
  //might make the follow button its own directive, that way I could make a game index for followed games
  ctrl.setFollowStatus = function(){
    ctrl.userGame = UserGameFactory.get({id: ctrl.game.id}, function(userGame){
      if(ctrl.userGame.id === undefined){
        ctrl.userGame = new UserGameFactory({id: ctrl.game.id});
        ctrl.followStatus = false;
      }
      else{
        ctrl.followStatus = true;
      }
    });
  }

  ctrl.changeFollowStatus = function(){
    if (ctrl.followStatus === false){
      ctrl.userGame.$save().then(function(resp){
        console.log(resp);
      },function(error){
        alert(error.statusText);
      });
    }
    else{
      ctrl.userGame.$delete().then(function(resp){
        console.log(resp);
      },function(error){
        alert(error.statusText);
      });
      ctrl.userGame = new UserGameFactory({id: ctrl.game.id});
    }
    ctrl.followStatus = !ctrl.followStatus;
  }

  ctrl.createGameFactory = function(){
    ctrl.game = new GameFactory({game: ctrl.data});
    ctrl.game.$save().then(function(resp){
      console.log(resp);
      ctrl.setFollowStatus();
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.updateGameFactory = function(){
    ctrl.game.$update().then(function(resp){
      console.log(resp);
      ctrl.setFollowStatus();
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', '$state', 'GiantbombService', 'BingService', 'UserGameFactory', 'GameFactory'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);