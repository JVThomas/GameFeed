function newsListDirective(BingService){
	return{
		scope:{},
		bindToController:{
			title: '=newsListDirective'
		},
		controllerAs: 'newsListCtrl',
		template:'<ul class="collection">'
    				+'<li ng-repeat = "headline in newsListCtrl.news" news-directive = "headline" class = "collection-item"></li>'
				 +'</ul>',
		controller: function(){
			var ctrl = this;

			ctrl.findNews = function(title){
    			BingService.getNews(title).then(function(resp){
      				ctrl.news = resp.data.d.results[0].News;
			    }, function(error){
			      alert(error.statusText);
			    });
  			}
  			ctrl.findNews(ctrl.title);
		}
	}
}

newsListDirective.$inject = ['BingService'];

angular
	.module('app')
	.directive('newsListDirective', newsListDirective);