(function(module){

  var LoadingSpinnerController = function($rootScope){

    var $ctrl = this;
     $ctrl.cancellers = [];
     $ctrl.showGif = false;
    $ctrl.$onInit = function()
    {

       $ctrl.cancellers.push($rootScope.$on('$stateChangeStart',
          function(event, toState, toParams, fromState, fromParams, options){
            $ctrl.showGif = true;
          }));

           $ctrl.cancellers.push($rootScope.$on('$stateChangeSuccess',
              function(event, toState, toParams, fromState, fromParams){
                $ctrl.showGif = false;
              }));

               $ctrl.cancellers.push($rootScope.$on('$stateChangeError',
                  function(event, toState, toParams, fromState, fromParams, error){
                    $ctrl.showGif = false;
                  }));
    };

    $ctrl.$onDestroy= function(){
      $ctrl.cancellers.forEach(function(item){
        item();
      });
      alert("destroyed", item);
    }
  };
  LoadingSpinnerController.$inject = ['$rootScope'];
  module.controller('LoadingSpinnerController',LoadingSpinnerController);

}(angular.module('spinnerModule')));
