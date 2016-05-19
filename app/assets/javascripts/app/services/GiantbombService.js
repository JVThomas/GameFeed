function GiantbombService ($http){
  
  this.getGames = function(query){
    return $http.get('http://localhost:3000/games/search.json', 
      {params:
        {query: query}
      }
    );
  }

  this.getGame = function(url){
    return $http.get('http://localhost:3000/game/search.json', 
      {params:
        {url: url}
      }
    );
  }
}

angular
  .module('app')
  .service('GiantbombService', GiantbombService);