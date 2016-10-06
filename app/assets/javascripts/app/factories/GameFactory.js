function GameFactory($resource){
	var Game = $resource('http://localhost:3000/api/v1/games/:giantbomb_id', {giantbomb_id: '@giantbomb_id'},{
		update: {method: 'PUT'}
	});
	return Game;
}

GameFactory.$inject = ['$resource'];

angular
	.module('app')
	.factory('GameFactory', GameFactory);