(function(module){

 var loadingSpinner = {

     templateUrl : "src/Spinner/templates/spinner.html",
     controller : 'LoadingSpinnerController'

};

module.component('loadingSpinner', loadingSpinner);

}(angular.module('spinnerModule')));
