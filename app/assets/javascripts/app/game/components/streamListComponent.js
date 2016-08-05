var streamListComponent = {
	bindings:{
		name: '='
	},
	templateUrl: 'game/components/streamList.html',
	controllerAs: 'streamListCtrl',
	controller:['TwitchService',function(TwitchService){
		var ctrl = this;

		ctrl.findChannels = function(name){
		    TwitchService.getChannels(name).then(function(resp){
		    	ctrl.setChannels(resp);
		    },function(error){
		    	alert(error.statusText);
		    });
		}

		ctrl.channelPagination = function(link){
			TwitchService.channelPagination(link).then(function(resp){
  				ctrl.setChannels(resp);
			}, function(error){
  				alert(error.statusText);
			});  
			}

			ctrl.setLinks = function(links){
		    ctrl.nextLink = links.next;
		    ctrl.prevLink = links.prev;
		}

		ctrl.setChannels = function(resp){
			ctrl.setLinks(resp.data._links);
  			ctrl.streams = resp.data.streams
		}

		ctrl.findChannels(ctrl.name);
	}]
}

angular
	.module('app')
	.component('streamListComponent', streamListComponent);