function UserGameFactory($resource){
	var UserGame = $resource('https://gamefeed.herokuapp.com/api/v1/user_games/:id',{game_id:'@game_id'},
		{
			delete: {method: 'DELETE', params:{id:'@id'}}
		});
	return UserGame;
}

UserGameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('UserGameFactory', UserGameFactory);