function ShowGameController ($stateParams, GiantbombService, TwitchService, BingService){
  var ctrl = this;

  ctrl.setGame = function (){
    ctrl.activePanel = 1;
    GiantbombService.getGame($stateParams.linkID).then(function(resp){
      ctrl.game = resp.data.results;
      ctrl.game.image !== null ? ctrl.game.icon = ctrl.game["image"]["thumb_url"] : ctrl.game.icon = "";
      ctrl.findChannels(ctrl.game.name);
      ctrl.findNews(ctrl.game.name);
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.findChannels = function(title){
    TwitchService.getChannels(title).then(function(resp){
      ctrl.setLinks(resp.data._links);
      ctrl.streams = resp.data.streams;
    },function(error){
      alert(error.statusText);
    });
  }

  ctrl.channelPagination = function(link){
    TwitchService.channelPagination(link).then(function(resp){
      ctrl.setLinks(resp.data._links);
      ctrl.streams = resp.data.streams
    }, function(error){
      alert(error.statusText);
    });  
  }

  ctrl.findNews = function(title){
    BingService.getNews(title).then(function(resp){
      ctrl.news = resp.data.d.results[0].News;
    }, function(error){
      alert(error.statusText);
    });
  }

  ctrl.setLinks = function(links){
    ctrl.nextLink = links.next;
    ctrl.prevLink = links.prev;
  }

  ctrl.setGame();
}

ShowGameController.$inject = ['$stateParams', 'GiantbombService', 'TwitchService', 'BingService'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);