describe('HomeController', function() {
	var $controller, $state, $rootScope, $httpBackend, TwitchService, userGames;

	beforeEach(module('app'));
	beforeEach(inject(function($injector) {
		$controller = $injector.get('HomeController');
		$state = $injector.get('$state');
		$rootScope = $injector.get('$rootScope');
		$httpBackend = $injector.get('$httpBackend');
		TwitchService = $injector.get('TwitchService');
		userGames = {
			userGame:{
				user_id: 1,
			}
		}

		createController = function(){
			return $controller('HomeController',{
				'$state':$state,
				'TwitchService': TwitchService,
				'userGames': userGames,

			});
		}
	}));
});