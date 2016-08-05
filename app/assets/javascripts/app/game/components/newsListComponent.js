var newsListComponent = {
	bindings:{
		name: '='
	},
	controllerAs: 'newsListCtrl',
	template:'<ul class="collection">'
				+'<li ng-repeat = "headline in newsListCtrl.news" class = "collection-item">'
					+ '<news-component headline = "headline"></news-component>'
				+'</li>'
			 +'</ul>',
	controller:['BingService',function(BingService){
		var ctrl = this;

		ctrl.findNews = function(name){
			BingService.getNews(name).then(function(resp){
  				ctrl.news = resp.data.d.results[0].News;
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