function UserGameFactory($resource){
	var UserGame = $resource('http://localhost:3000/api/v1/user_games/:id',{game_id:'@game_id'},
		{
			delete: {method: 'DELETE', params:{id:'@id'}}
		});
	return UserGame;
}

UserGameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('UserGameFactory', UserGameFactory);
