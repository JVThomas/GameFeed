describe ('GiantbombService', function(){
	var httpBackend, GiantbombService

	// hook in the app
	beforeEach(module('app'));

	//inject httpBackend and GiantbombService
	beforeEach(inject(function($injector){
		httpBackend = $injector.get('$httpBackend');
		GiantbombService = $injector.get('GiantbombService');
		var result;
	}));

	describe('getGames()', function(){
		it('should make a backend/GB API query and expect games in JSON format', function(){
			//set up mocked return
			var data = {games:['pong']};

			//catch backend request and respond with mocked return data
			httpBackend.whenGET('http://localhost:3000/giantbomb/games/search.json').respond(data);

			//make the actual method call
			GiantbombService.getGames().then(function(response){
				result = response.data;
			});

			//end any pending async requests
			httpBackend.flush();
			expect(result).toEqual(data);
		});
	});

	describe('getGame()', function(){
		it('should make a backend/GB API query and expect game details in JSON format', function(){
			var data = {
				game: 'Street Fighter'
			}

			httpBackend.whenGET('http://localhost:3000/giantbomb/game/search.json').respond(data);

			GiantbombService.getGame().then(function(response){
				result = response.data;
			});

			httpBackend.flush();
	
			expect(result).toEqual(data);
		})
	})
});