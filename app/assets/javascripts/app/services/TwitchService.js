function TwitchService ($http) {

  this.getChannels = function(title){
    return $http.get('http://localhost:3000/game/channels.json', 
      {params:
        {title: title}
      }
    );
  }

  this.channelPagination = function(link){
    return $http.get('http://localhost:3000/game/page.json',
      {params: {link:link} }
    );
  }
}

angular
  .module('app')
  .service('TwitchService', TwitchService);