function GamesService($http){
	this.getUserGames = function(){
		return $http.get('http://localhost:3000/games/search/user_games.json');
	}

	this.findUserGame = function(giantbomb_id){
		return $http.get('http://localhost:3000/games/search/find_user_game.json',
			{params:
				{giantbomb_id: giantbomb_id}
			}
		);
	}
}

GamesService.$inject = ['$http']

angular
	.module('app')
	.service('GamesService', GamesService)