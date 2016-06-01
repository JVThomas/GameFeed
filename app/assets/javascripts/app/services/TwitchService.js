function TwitchService ($http) {

  this.getChannels = function(title){
    return $http.get('http://localhost:3000/game/channels.json', 
      {params:
        {title: title}
      }
    );
  }
}

angular
  .module('app')
  .service('TwitchService', TwitchService);