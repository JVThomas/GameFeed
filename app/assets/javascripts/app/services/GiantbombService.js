function GiantbombService ($http){
  
  this.getGames = function(query){
    return $http.get('https://gamefeedapp.herokuapp.com/api/v1/giantbomb/games/search.json', 
      {params:
        {query: query}
      }
    );
  }

  this.getGame = function(url){
    return $http.get('https://gamefeedapp.herokuapp.com/api/v1/giantbomb/game/search.json', 
      {params:
        {data: url}
      }
    );
  }
}

GiantbombService.$inject = ['$http'];

angular
  .module('app')
  .service('GiantbombService', GiantbombService);