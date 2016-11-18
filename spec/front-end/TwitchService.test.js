describe('TwitchService', function(){
	var httpBackend, TwitchService;
	
	beforeEach(module('app'));
	
	beforeEach(inject(function($injector){
		httpBackend = $injector.get('$httpBackend');
		TwitchService = $injector.get('TwitchService');
	}));

	it('should return a list of streams based on query', function(){
		var result;
		var data = { results: [{name:"test"}, {name:"test2"}] };
		httpBackend.whenGET('http://localhost:3000/api/v1/twitch/channels.json?limit=25').respond(data);

		TwitchService.getChannels().then(function(response){
			result = response.data;
		});

		httpBackend.flush();
		expect(result).toEqual(data);
	});

	it ('should return pagination links for prev/next set of streams', function(){
		var result;
		var data = {_prev: "prev_url", _next: "next_url"}
		httpBackend.whenGET('http://localhost:3000/api/v1/twitch/page.json').respond(data);

		TwitchService.channelPagination().then(function(response){
			result = response.data;
		});

		httpBackend.flush();

		expect(result).toEqual(data);
	});
});