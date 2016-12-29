(function(module){

  var MenuController = function(items)
  {
    var menuCtrl = this;
    menuCtrl.items = items;

  };

  MenuController.$inject =['items'];
  module.controller('MenuController', MenuController);
}(angular.module('restaurantModule')));
