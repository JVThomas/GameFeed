function GamesService($http){
	this.getUserGames = function(){
		return $http.get('http://localhost:3000/games/user_games.json');
	}
}

angular
	.module('app')
	.service('GamesService', GamesService)