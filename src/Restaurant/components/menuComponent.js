(function(module){

  var menuComponent = {
    templateUrl : "src/Restaurant/templates/menu_items.template.html",
    bindings:{
      items:"<"
    }
  };
  module.component('menuComponent', menuComponent);
}(angular.module('restaurantModule')));
