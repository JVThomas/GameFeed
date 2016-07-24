function UserGameFactory($resource){
	var userGame = $resource('http://localhost:3000/user_games');
	return userGame;
}

angular
	.module('app')
	.factory('UserGameFactory', UserGameFactory);