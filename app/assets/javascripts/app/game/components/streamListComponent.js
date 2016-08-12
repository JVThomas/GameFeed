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

		ctrl.setLinks = function(links,flag){
			flag ? ctrl.nextLink = links.next : ctrl.nextLink = undefined;
		    ctrl.prevLink = links.prev;
		}

		ctrl.setChannels = function(resp){
			resp.data.streams.length === 0 ? ctrl.setLinks(resp.data._links, false) : ctrl.setLinks(resp.data._links, true);
  			ctrl.streams = resp.data.streams;
		}

		ctrl.findChannels(ctrl.name);
	}]
}

angular
	.module('app')
	.component('streamListComponent', streamListComponent);