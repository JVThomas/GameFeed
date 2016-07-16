function GameFactory($resource){
	var Game = $resource('http://localhost:3000/games/:id', {id: '@id'},{
		'update': {method: 'PUT'}
	});
	return Game;
}

angular
.module('app')
.factory('GameFactory', GameFactory);