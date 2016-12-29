(function(module){

  var CategoryController = function(categoryItems)
  {
    var catCtrl = this;
    catCtrl.items = categoryItems;

  };

  CategoryController.$inject =['categoryItems'];
  module.controller('CategoryController', CategoryController);
}(angular.module('restaurantModule')));
