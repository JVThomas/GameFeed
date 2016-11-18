describe('HomeController', function() {
	var $controller, $rootScope, createController, $httpBackend, TwitchService, userGames, UserGameFactory, $timeout, $q;

	beforeEach(module('app'));
	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
		$rootScope = $injector.get('$rootScope');
		$httpBackend = $injector.get('$httpBackend');
		TwitchService = $injector.get('TwitchService');
		$timeout = $injector.get('$timeout');
		$q = $injector.get('$q');
		userGames = [{name: 'Street Fighter V'},{name: 'Overwatch'}];
		UserGameFactory = {
			query: function(){
				var deferred = $q.defer();
				deferred.resolve(userGames);
				return deferred.promise;
			}
		}

		createController = function(){
			return $controller('HomeController',{
				'UserGameFactory': UserGameFactory,
				'TwitchService': TwitchService,
				'$timeout': $timeout
			});
		}
	}));

	describe('#getUserGames()', function(){
		it("obtains userGames from backend", function(){
			var homeCtrl = createController();
			homeCtrl.getUserGames();
			$rootScope.$apply();
			expect(homeCtrl.userGames).toEqual(userGames);
		});
	});
});