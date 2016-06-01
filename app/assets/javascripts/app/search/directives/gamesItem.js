function gamesItem($state) {
  return{
    scope:{},
    templateUrl: 'search/directives/item.html',
    bindToController:{
      item: "=gamesItem"
    },
    controllerAs: 'gamesItem',
    controller: ['$state', function($state){
      var ctrl = this;
      ctrl.game = {};
      ctrl.item.image !== null ? ctrl.game.icon = ctrl.item["image"]["icon_url"] : ctrl.game.icon = "";
      ctrl.game.title = ctrl.item["name"];
      ctrl.game.platforms = [];
      if (ctrl.item["platforms"] === null || ctrl.item["platforms"].length === 0){
        ctrl.game["platforms"].push("N/A");
      }
      else{
        for(i = 0; i < ctrl.item["platforms"].length; i++){
          ctrl.game.platforms.push(ctrl.item["platforms"][i]["name"]);
        }
      }
      ctrl.game.deck = ctrl.item["deck"];
      ctrl.game.description = ctrl.item["description"];
      ctrl.item["original_release_date"] !== null ? ctrl.game.release_date = ctrl.item["original_release_date"] : ctrl.game.release_date = "N/A";
      ctrl.game.giantbombID = ctrl.item["id"];
       //need to add developers to display
      linkArr = ctrl.item["api_detail_url"].split("/");
      ctrl.game.detailID = linkArr[linkArr.length-2];
    }]
  }
}

gamesItem.$inject = ['$state'];

angular
  .module('app')
  .directive('gamesItem', gamesItem);