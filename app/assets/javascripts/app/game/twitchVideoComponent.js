var twitchVideoComponent = {
	bindings:{
		channel: "<"
	},
	templateUrl: 'game/twitchVideo.html',
	controllerAs: 'twitchVideoCtrl',
	controller:['$scope', function($scope) {
		var ctrl = this;
		ctrl.videoSource = "http://player.twitch.tv/?channel=" + ctrl.channel;
		$scope.$on(function(newValue){
			debugger;
		})
	}]
}

angular
	.module('app')
	.component('twitchVideoComponent', twitchVideoComponent) 