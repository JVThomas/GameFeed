function streamDirective(){
  return{
    scope:{},
    bindToController:{
      stream: '=streamDirective'
    },
    controllerAs: 'streamCtrl',
    templateUrl: 'game/directives/stream.html',
    controller: function(){
      var ctrl = this;
      ctrl.stream.channel.status = ctrl.stream.channel.status.substr(0,42) + "...";
    }
  }
}

angular
  .module('app')
  .directive('streamDirective', streamDirective);