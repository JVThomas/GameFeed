var streamListComponent = {
	bindings:{
		name: '='
	},
	templateUrl: 'game/streamList.html',
	controllerAs: 'streamListCtrl',
	controller:['TwitchService',function(TwitchService){
		var ctrl = this;
		ctrl.channelName;
		ctrl.loading = true;
		ctrl.videoVisible = false;

		ctrl.findChannels = function(name){
		    TwitchService.getChannels(name).then(function(resp){
		    	ctrl.loading = false;
		    	ctrl.setChannels(resp);
		    },function(error){
		    	alert(error.statusText);
		    });
		}

		ctrl.channelPagination = function(link){
			ctrl.loading = true;
			TwitchService.channelPagination(link).then(function(resp){
				ctrl.loading = false;
  				ctrl.setChannels(resp);
			}, function(error){
					debugger;
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

		ctrl.showTwitchVideo = function(channel){
			ctrl.videoVisible = true;
			ctrl.channelName = channel;
		}

		ctrl.hideTwitchVideo = function(){
			ctrl.videoVisible = false;
			ctrl.channelName = "";
		}

		ctrl.findChannels(ctrl.name);
	}]
}

angular
	.module('app')
	.component('streamListComponent', streamListComponent);