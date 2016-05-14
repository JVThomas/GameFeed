function gamesResults($rootScope){
  return {
    scope:{},
    controllerAs: 'gamesResults',
    templateUrl: 'search/directives/results.html',
    controller: function($rootScope, $filter){
      var ctrl = this;
      
      $rootScope.$on('results', function(eventName, results){
        ctrl.resultList = results.data.results;
        (ctrl.resultList === undefined || ctrl.resultList.length === 0) ? ctrl.resultsFoundBool = false :  ctrl.resultsFoundBool = true;
      });
    }
  }
}

angular
  .module('app')
  .directive('gamesResults', gamesResults);