function gamesItem($state) {
  return{
    scope:{},
    templateUrl: 'search/gamesItem.html',
    bindToController:{
      item: "=gamesItem"
    },
    controllerAs: 'gamesItem',
    controller: function($state){
      var ctrl = this;
      ctrl.setGame();

      ctrl.setGame = function(){
        ctrl.game.icon = item["image"]["icon_url"];
        ctrl.game.title = item["name"];
        ctrl.game.platforms = [];
        for(i = 0; i < item["platforms"].length; i++){
          ctrl.game.platforms.push(item["platforms"][i]["name"]);
        }
        ctrl.game.deck = item["deck"];
        ctrl.game.description = item["description"];
        item["original_release_date"] !== null ? ctrl.game.release_date = item["original_release_date"] : ctrl.game.release_date = "N/A";
        ctrl.game.giantbomb_id = item["id"]; 
      }

      ctrl.viewGame = function(){
        debugger;
      }
    }
  }
}

angular
  .module('app')
  .directive('gamesItem', gamesItem);