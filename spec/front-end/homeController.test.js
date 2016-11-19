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
		//UserGameFactory = {
		/*	query: function(){
				var deferred = $q.defer();
				deferred.resolve(userGames);
				return deferred.promise;
			}
		}*/

		UserGameFactory = {
			query: function(){
				var deferred = $q.defer();
				deferred.resolve(userGames);
				return deferred.promise;
			}
		}

		spyOn(UserGameFactory, 'query').and.callThrough();

		createController = function(){
			return $controller('HomeController',{
				'UserGameFactory': UserGameFactory,
				'TwitchService': TwitchService,
				'$timeout': $timeout
			});
		}
	}));

	describe('#findHomeStreams()', function(){
		it('calls on getUserGames to begin stream retreival', function(){
			spyOn(homeCtrl, 'getUserStreams').and.returnValue('return');
			expect(homeCtrl.getUserStreams).toHaveBeenCalled();
		})
	});
	describe('#getUserGames()', function(){
		it("obtains userGames from backend", function(){
			var homeCtrl = createController();
			spyOn(homeCtrl, 'sendStreamRequest').and.returnValue("return");
			homeCtrl.getUserGames();
			$rootScope.$apply();
			expect(UserGameFactory.query).toHaveBeenCalled();
			expect(homeCtrl.userGames).toEqual(userGames);
			expect(homeCtrl.sendStreamRequest).toHaveBeenCalled();
		});
	});

});