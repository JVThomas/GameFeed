function navbarDirective($cookies, Auth, $state) {
  return{
    scope:{},
    controllerAs: 'navbar',
    templateUrl: 'nav/navbar.html',
    controller: function($cookies, Auth, $state){
      var ctrl = this
      this.user = $cookies.get('user')

      ctrl.logout = function(){
        Auth.logout().then(function(resp){
          $cookies.remove('user');
          ctrl.user = undefined;
          $state.go('welcome');
        },function(error){
          alert('Oops, something went wrong with logout');
        });
      }
    }
  }
}

angular
  .module('app')
  .directive('navbarDirective', navbarDirective);