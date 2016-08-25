var streamComponent = {
  bindings:{
    stream: '='
  },
  controllerAs: 'streamCtrl',
  templateUrl: 'game/stream.html',
  controller: function(){
    var ctrl = this;
    ctrl.stream.channel.status = ctrl.stream.channel.status.substr(0,35) + "...";
  }
}

angular
  .module('app')
  .component('streamComponent', streamComponent);