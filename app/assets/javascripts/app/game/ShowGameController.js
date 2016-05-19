function ShowGameController ($stateParams){
  var ctrl = this;
  ctrl.game = $stateParams.game
}

ShowGameController.$inject = ['$stateParams'];

angular
  .module('app')
  .controller('ShowGameController', ShowGameController);