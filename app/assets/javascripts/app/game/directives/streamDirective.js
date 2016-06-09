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
      ctrl.stream.channel.status = ctrl.stream.channel.status.substr(0,45);
    }
  }
}

angular
  .module('app')
  .directive('streamDirective', streamDirective);