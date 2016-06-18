function newsDirective(){
  return{
    scope:{},
    bindToController:{
      headline: '=newsDirective'
    },
    controllerAs: 'newsCtrl',
    templateUrl: 'game/directives/news.html',
    controller: function(){
    }
  }
}

angular
  .module('app')
  .directive('newsDirective', newsDirective);