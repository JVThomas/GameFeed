var twitchVideoComponent = {
	bindings:{
		channel: "<"
	},
	templateUrl: 'game/twitchVideo.html',
	controllerAs: 'twitchVideoCtrl',
	controller:function() {
		var ctrl = this;
		ctrl.videoSource = "http://player.twitch.tv/?channel=" + ctrl.channel;
	}
}

angular
	.module('app')
	.component('twitchVideoComponent', twitchVideoComponent) 