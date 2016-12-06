function GameFactory($resource){
	var Game = $resource('https://gamefeedapp.herokuapp.com/api/v1/games/:giantbomb_id', {giantbomb_id: '@giantbomb_id'},{
		update: {method: 'PUT'}
	});
	return Game;
}

GameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('GameFactory', GameFactory);