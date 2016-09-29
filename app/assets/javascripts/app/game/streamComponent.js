var streamComponent = {
  bindings:{
    stream: '='
  },
  controllerAs: 'streamCtrl',
  templateUrl: 'game/stream.html',
  controller: function(){
    var ctrl = this;
    var videoVisible = false;
    ctrl.stream.channel.status = ctrl.stream.channel.status.substr(0,50) + "...";

    ctrl.videoShow = function(){
      ctrl.videoVisible = true;
    }
  }
}

angular
  .module('app')
  .component('streamComponent', streamComponent);