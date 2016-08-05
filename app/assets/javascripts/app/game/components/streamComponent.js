var streamComponent = {
  bindings:{
    stream: '='
  },
  controllerAs: 'streamCtrl',
  templateUrl: 'game/components/stream.html',
  controller: function(){
    var ctrl = this;
    ctrl.stream.channel.status = ctrl.stream.channel.status.substr(0,42) + "...";
  }
}

angular
  .module('app')
  .component('streamComponent', streamComponent);