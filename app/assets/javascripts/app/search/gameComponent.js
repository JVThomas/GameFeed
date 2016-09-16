var gameComponent = {
  templateUrl: 'search/game.html',
  bindings:{
    result: "="
  },
  controllerAs: 'gameCtrl',
  controller: ['$state', function($state){
    var ctrl = this;
    ctrl.game = {};
    
    //set up image
    ctrl.result.image !== null ? ctrl.game.icon = ctrl.result["image"]["icon_url"] : ctrl.game.icon = "";

    //set title
    ctrl.game.title = ctrl.result["name"];

    //assign platforms
    ctrl.game.platforms = [];
    if (ctrl.result["platforms"] === null || ctrl.result["platforms"].length === 0){
      ctrl.game["platforms"].push("N/A");
    }
    else{
      for(i = 0; i < ctrl.result["platforms"].length; i++){
        ctrl.game.platforms.push(ctrl.result["platforms"][i]["name"]);
      }
    }

    //assign deck
    ctrl.game.deck = ctrl.result["deck"];
    
    //assign release date
    ctrl.result["original_release_date"] !== null ? ctrl.game.release_date = ctrl.result["original_release_date"] : ctrl.game.release_date = "N/A";
    
    //assign giantbomb id
    ctrl.game.giantbombID = ctrl.result["id"];
     
    //manually creating api link for full game page
    linkArr = ctrl.result["api_detail_url"].split("/");
    ctrl.game.detailID = linkArr[linkArr.length-2];
  }]
}

angular
  .module('app')
  .component('gameComponent',gameComponent);