function streamDirective(){
  return{
    scope:{},
    bindToController:{
      stream: '=streamDirective'
    },
    controllerAs: 'streamCtrl',
    templateUrl: 'game/directives/stream.html',
    controller: function(){
    }
  }
}

angular
  .module('app')
  .directive('streamDirective', streamDirective);