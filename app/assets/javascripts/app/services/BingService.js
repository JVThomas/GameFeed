function BingService($http){
  
  this.getNews = function(title){
    return $http.get('http://gamefeedapp.herokuapp.com/api/v1/bing/news.json', 
      {params:
        {title: title}
      }
    );
  }
}

BingService.$inject = ['$http'];

angular
  .module('app')
  .service('BingService', BingService)
