var newsListComponent = {
	bindings:{
		name: '='
	},
	controllerAs: 'newsListCtrl',
	template:'<ul class="collection">'
				+'<div class = "loader" ng-if = "newsListCtrl.loading"></div>'
				+'<li ng-repeat = "headline in newsListCtrl.news" class = "collection-item">'
					+ '<news-component headline = "headline"></news-component>'
				+'</li>'
			 +'</ul>',
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