var newsComponent = {
  bindings: {
    headline: '='
  },
  templateUrl: 'game/components/news.html',
  controller: function(){
    var ctrl = this;
    ctrl.headline.Date = Date(ctrl.headline.Date);
  },
  controllerAs: 'newsCtrl'
};

angular
  .module('app')
  .component('newsComponent', newsComponent);