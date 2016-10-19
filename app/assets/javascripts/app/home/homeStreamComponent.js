var homeStreamComponent = {
	bindings:{
		stream: "="
	},
	templateUrl: 'home/homeStream.html',
	controllerAs: 'homeStreamCtrl',
	controller: function(){
		var ctrl = this;
	}
}

angular
	.module('app')
	.component('homeStreamComponent', homeStreamComponent)