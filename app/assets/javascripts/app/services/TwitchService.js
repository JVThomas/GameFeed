function TwitchService ($http) {

  this.getChannels = function(title, limit = 25){
    return $http.get('http://localhost:3000/api/v1/twitch/channels.json', {
      params:{
        title: title,
        limit: limit
      }
    });
  }

  this.channelPagination = function(link){
    return $http.get('http://localhost:3000/api/v1/twitch/page.json',
      {params: {link:link} }
    );
  }
   
}

TwitchService.$inject = ['$http'];

angular
  .module('app')
  .service('TwitchService', TwitchService);