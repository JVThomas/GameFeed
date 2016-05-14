function gamesResults($rootScope){
  return {
    scope:{},
    controllerAs: 'gamesResults',
    templateUrl: 'search/gamesResults.html',
    controller: function($rootScope, $filter){
      var ctrl = this;
      
      $rootScope.$on('results', function(eventName, results){
        ctrl.resultList = results["results"]
        ctrl.filteredList = ctrl.resultList;
        (ctrl.resultList === undefined || ctrl.resultList.length === 0) ? ctrl.resultsFoundBool = false :  ctrl.resultsFoundBool = true; 
      });

      ctrl.refilter = function(){
        ctrl.filteredList = $filter('filter')(ctrl.resultList, ctrl.searchQuery)
      }
    }
  }
}

angular
  .module('app')
  .directive('gamesResults', gamesResults);