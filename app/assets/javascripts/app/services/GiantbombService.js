function GiantbombService ($http){
  this.getGames = function(query){
    return $http.get('http://localhost:3000/games/search.json', 
      {params:
        {query: query}
      }
    );
  }
}

angular
  .module('app')
  .service('GiantbombService', GiantbombService);