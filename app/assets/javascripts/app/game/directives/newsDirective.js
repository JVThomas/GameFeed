function newsDirective(){
  return{
    scope:{},
    bindToController:{
      headline: '=newsDirective'
    },
    controllerAs: 'newsCtrl',
    templateUrl: 'game/directives/news.html',
    controller: function(){
      this.headline.Date = Date(this.headline.Date);
    }
  }
}

angular
  .module('app')
  .directive('newsDirective', newsDirective);