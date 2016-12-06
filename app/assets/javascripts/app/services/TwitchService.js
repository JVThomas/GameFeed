function TwitchService ($http) {

  this.getChannels = function(title,limit){
    limit === undefined ? limit = 25 : limit 
    return $http.get('http://gamefeedapp.herokuapp.com/api/v1/twitch/channels.json', {
      params:{
        title: title,
        limit: limit
      }
    });
  }

  this.channelPagination = function(link){
    return $http.get('http://gamefeedapp.herokuapp.com/api/v1/twitch/page.json',
      {params: {link:link} }
    );
  }
   
}

TwitchService.$inject = ['$http'];

angular
  .module('app')
  .service('TwitchService', TwitchService);