describe('BingService', function(){
	var BingService, $httpBackend;
	
	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		BingService = $injector.get('BingService');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it('should return an array of news headlines', function() {
		var result, data;
		data = {result: [{name: "test1"},{name: "test2"}]};

		$httpBackend.whenGET('http://localhost:3000/bing/news.json').respond(data);

		BingService.getNews().then(function(response){
			result = response.data;
		});

		$httpBackend.flush();

		expect(result).toEqual(data);
	});

});