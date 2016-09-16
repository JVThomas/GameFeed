describe('gameComponent', function() {
	var $state, $componentController, result, controller
	beforeEach(module('app'));

	beforeEach(inject(function($injector){
		$state = $injector.get('$state');
		$componentController = $injector.get('$componentController');
		result = {
							id:'43820',
							expected_release_year: 'null',
							name: "Street Fighter V",
							original_release_date: "2016-02-16 00:00:00",
							deck: "The fifth numbered entry in the renowned Street Fighter series of fighting games has appeared as a PlayStation 4 and PC exclusive.",
							image:{
								icon_url: 'url'
							},
							platforms:[{name:'PC'},{name:'PS4'}],
							api_detail_url: "http://www.giantbomb.com/api/game/3030-48320/" 
						};
		controller = $componentController('gameComponent', {'$state': $state}, {'result': result});
	}));

	it('should set the game data passed into the controller', function() {
		expect(controller.game.title).toEqual('Street Fighter V');
		expect(controller.game.icon).toEqual('url');
		expect(controller.game.deck).toEqual("The fifth numbered entry in the renowned Street Fighter series of fighting games has appeared as a PlayStation 4 and PC exclusive.");
		expect(controller.game.platforms).toEqual(["PC","PS4"]);
		expect(controller.game.detailID).toEqual("3030-48320");
	});
});