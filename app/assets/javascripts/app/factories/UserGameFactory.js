function UserGameFactory($resource){
	var UserGame = $resource('http://localhost:3000/user_games/:giantbomb_id',{giantbomb_id:'@giantbomb_id'});
	return UserGame;
}

UserGameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('UserGameFactory', UserGameFactory);