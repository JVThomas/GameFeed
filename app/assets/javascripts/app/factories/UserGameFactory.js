function UserGameFactory($resource){
	var UserGame = $resource('http://localhost:3000/user_games/:id',{id:'@id'});
	return UserGame;
}

UserGameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('UserGameFactory', UserGameFactory);