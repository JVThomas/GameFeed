var newsListComponent = {
	bindings:{
		name: '='
	},
	controllerAs: 'newsListCtrl',
	templateUrl: 'game/newsList.html',
	controller:['BingService',function(BingService){
		var ctrl = this;
		ctrl.loading = true;

		ctrl.findNews = function(name){
			BingService.getNews(name).then(function(resp){
  				ctrl.news = resp.data.d.results[0].News;
  				ctrl.loading = false;
		    }, function(error){
		      alert(error.statusText);
		    });
		}
		ctrl.findNews(ctrl.name);
	}]
}

angular
	.module('app')
	.component('newsListComponent', newsListComponent);