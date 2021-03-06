var gamesResultsComponent = {
  controllerAs: 'gamesResults',
  templateUrl: 'search/gamesResults.html',
  controller: ['$rootScope', '$filter', function($rootScope){
    var ctrl = this;
    
    $rootScope.$on('results', function(eventName, results){
      ctrl.resultList = results.data.results;
      (ctrl.resultList === undefined || ctrl.resultList.length === 0) ? ctrl.resultsFoundBool = false :  ctrl.resultsFoundBool = true;
    });
  }]
}

angular
  .module('app')
  .component('gamesResultsComponent', gamesResultsComponent);