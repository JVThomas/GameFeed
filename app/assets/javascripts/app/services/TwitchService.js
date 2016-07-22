function TwitchService ($http) {

  this.getChannels = function(title){
    return $http.get('http://localhost:3000/twitch/channels.json', 
      {params:
        {title: title}
      }
    );
  }

  this.channelPagination = function(link){
    return $http.get('http://localhost:3000/twitch/page.json',
      {params: {link:link} }
    );
  }
}

TwitchService.$inject = ['$http'];

angular
  .module('app')
  .service('TwitchService', TwitchService);