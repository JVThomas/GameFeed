function streamListDirective(TwitchService){
	return{
		scope:{},
		bindToController:{
			title: '=streamListDirective'
		},
		templateUrl: 'game/directives/streamList.html',
		controllerAs: 'streamListCtrl',
		controller:function(){
			var ctrl = this;

			ctrl.findChannels = function(title){
			    TwitchService.getChannels(title).then(function(resp){
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

			ctrl.findChannels(ctrl.title);
		}
	}
}

streamListDirective.$inject = ['TwitchService'];

angular
	.module('app')
	.directive('streamListDirective', streamListDirective);