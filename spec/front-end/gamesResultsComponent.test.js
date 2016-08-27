describe('gamesResultsComponent', function(){
	var $rootScope, $componentController, controller;
	beforeEach(module('app'));

	beforeEach(inject(function($injector){
		//use injector to get necessary services
		$rootScope = $injector.get('$rootScope');
		$componentController = $injector.get('$componentController');

		// use componentController to retrieve controller and inject with services
		controller = $componentController('gamesResultsComponent', {'$rootScope':$rootScope});
	}));

	it ('should read the broadcast and obtain the results from parent scope', function(){
		//set up data for broadcast
		var data = {data:{results:'pong'}};

		//manually trigger broadcast
		$rootScope.$broadcast('results', data);

		//expect controller variable to equal broadcasted data	
		expect(controller.resultList == 'pong');
	});
});