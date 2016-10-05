function navbarDirective(Auth, $state, $rootScope, $cookies) {
  return{
    scope:{},
    controllerAs: 'navbar',
    templateUrl: 'nav/navbar.html',
    controller: function(Auth, $state, $rootScope, $cookies){
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

      $rootScope.$on('devise:login', function(event, user) {
        $cookies.putObject('user', user);
        ctrl.getUser();
      });
      
      $rootScope.$on('devise:new-session', function(event, user) {
        $cookies.putObject('user', user);
        ctrl.getUser()
      }); 

      $rootScope.$on('devise:new-registration', function(event, user) {
        $cookies.putObject('user', user);
        ctrl.getUser();
      });

    }
  }
}

navbarDirective.$inject = ['Auth', '$state', '$rootScope', '$cookies']

angular
  .module('app')
  .directive('navbarDirective', navbarDirective);