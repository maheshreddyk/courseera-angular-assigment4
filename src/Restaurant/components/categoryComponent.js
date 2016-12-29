(function(module){

  var categoryComponent = {
    templateUrl : "src/Restaurant/templates/categories.template.html",
    bindings:{
      items:"<"
    }
  };
  module.component('categoryComponent', categoryComponent);
}(angular.module('restaurantModule')));
