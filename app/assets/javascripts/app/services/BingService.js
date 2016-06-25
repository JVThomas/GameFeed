function BingService($http){
  
  this.getNews = function(title){
    return $http.get('http://localhost:3000/bing/news.json', 
      {params:
        {title: title}
      }
    );
  }
}

angular
  .module('app')
  .service('BingService', BingService)
