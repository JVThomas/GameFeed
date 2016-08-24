describe('SearchGamesController', function(){
		
	var $controller, gbService, createController, $rootScope, $q, deferred

	//required line, hooks module into test
	beforeEach(module('app'));

	//gets instances of services and scope and stores via refrence
	beforeEach(inject(function($injector){
		
		$controller = $injector.get('$controller');

		$rootScope = $injector.get('$rootScope');

		//needed for manual resolution of promise
		$q = $injector.get('$q');

		//mock GiantbombService for injection
		gbService = {
						getGames: function(query){
							//block of code manually sets resolve data before returning promise
							var deferred = $q.defer(); //creates a deferred object to be returned
							deferred.resolve('pong');
							return deferred.promise
						},
						getGame: function(query){}
					};

		//manually inject $rootScope and mock service into new controller instance 
		createController = function(){
			return $controller('SearchGamesController', {
				'GiantbombService': gbService,
				'$rootScope': $rootScope
			});
		}
	}));

	describe('findGame', function(){
		it('should use retrieve a list of games by query via Giantbomb API', function(){

			//watcher to see what happens when $rootScope broadcasts
			spyOn($rootScope, '$broadcast');
			
			//created a controller and set the query variable
			var controller = createController();
			controller.query = 'pong';

			//execute the target method, used $apply() to move the digest cycle forward and resolve the promise
			controller.findGame();
			$rootScope.$apply();

			//standard expect statement, makes sure broadcast event has occured
			expect($rootScope.$broadcast).toHaveBeenCalledWith('results', 'pong');
		});
	});
});