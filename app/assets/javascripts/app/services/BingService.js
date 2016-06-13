function BingService($http){
  
  this.getNews = function(title){
    return $http.get('http://localhost:3000/game/news.json', 
      {params:
        {title: title}
      }
    );
  }
}

angular
  .module('app')
  .service('BingService', BingService)
