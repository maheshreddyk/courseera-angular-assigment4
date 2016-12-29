(function(module){


  var routeConfig = function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/");

      $stateProvider.state("home", {
                            url:"/",
                            templateUrl:"src/Restaurant/templates/home.html"
      })
      .state("categories", {
        url :"/categories",
        templateUrl: "src/Restaurant/templates/categories.html",
        controller: "CategoryController as catCtrl",
        resolve:{ categoryItems : ['MenuDataService', function(MenuDataService){
            return MenuDataService.getCategories();
        } ]}
      })
      .state("items",{
          url:"/items/{categoryId}",
          templateUrl: "src/Restaurant/templates/menu_items.html",
        controller:"MenuController as menuCtrl",
        resolve:{items : ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getMenuItemsByCategory($stateParams.categoryId);
        }]}
      });

  };
  routeConfig.$inject =['$stateProvider', '$urlRouterProvider'];
  module.config(routeConfig);

}(angular.module('restaurantModule')));
