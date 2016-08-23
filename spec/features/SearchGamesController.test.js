describe('SearchGamesController', function(){
		
	var $controller, gbServiceMock, createController, rootScope, query;
	
	beforeEach(module('app'));

	beforeEach(inject(function($injector){

		gbServiceMock = {
			getGames: function(query){},
			getGame: function(query){}
		};
		
		$controller = $injector.get('$controller');

		rootScope = $injector.get('$rootScope');

		createController = function(){
			return $controller('SearchGamesController', {
				'$rootScope': rootScope,
				'GiantbombService': gbServiceMock
			});
		}
	}));

	describe('findGame', function(){
		it('should use retrieve a list of games by query via Giantbomb API', function(){
			spyOn(rootScope, '$broadcast');
			var controller = createController();
			rootScope.findGame();

			expect(rootScope.$broadcast).toHaveBeenCalledWith('results');
		});
	});
});