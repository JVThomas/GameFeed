var navbarComponent = {
  controllerAs: 'navbar',
  templateUrl: 'nav/navbar.html',
  controller: ['Auth', '$state', '$scope', '$cookies', function(Auth, $state, $scope, $cookies){
    var ctrl = this

    ctrl.logout = function(){
      Auth.logout().then(function(resp){
        $cookies.remove('user');
        ctrl.user = undefined;
        $state.go('welcome');
      },function(error){
        alert('Oops, something went wrong with logout');
      });
    }

    ctrl.getUser = function(){
      ctrl.user = JSON.parse($cookies.get('user'));
    }

    var removeLoginListnerFn = $scope.$on('devise:login', function(event, user) {
      $cookies.putObject('user', user);
      ctrl.getUser();
    });
    
    var removeSessionListnerFn = $scope.$on('devise:new-session', function(event, user) {
      $cookies.putObject('user', user);
      ctrl.getUser()
    }); 

    var removeRegistrationListnerFn = $scope.$on('devise:new-registration', function(event, user) {
      $cookies.putObject('user', user);
      ctrl.getUser();
    });

    $scope.$on('destroy', function(){
      removeLoginListnerFn();
      removeRegistrationListnerFn();
      removeSessionListnerFn();
    });
  }]
}

angular
  .module('app')
  .component('navbarComponent', navbarComponent);