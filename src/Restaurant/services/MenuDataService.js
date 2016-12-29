(function(module){

  var MenuDataService = function($http, ApiBasePath){
    var getCategories = function(){
      return $http({url:ApiBasePath + "categories.json"})
          .then(function(response){
            return response.data;
          }).
          catch(function(error){
            console.log("Category API Call failed", error);
          });
    };
    var getMenuItemsByCategory = function(category){
      return $http({url:ApiBasePath + "menu_items.json?category="+category})
          .then(function(response){
            return response.data.menu_items;
          }).
          catch(function(error){
            console.log("Menu Items by Category API Call failed", error);
          });
    };
    return{
      getCategories: getCategories,
      getMenuItemsByCategory: getMenuItemsByCategory
    }

  };
  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  module.service('MenuDataService', MenuDataService);
}(angular.module('restaurantModule')));
