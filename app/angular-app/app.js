var naBaseApp = angular.module("naBaseApp", [ "ngRoute" ])

naBaseApp.config(function ($httpProvider, $routeProvider) {
   $httpProvider.interceptors.push('AuthInterceptor')

    $routeProvider

    /* API Test Page */
    .when( "/data/vehicles",{
      controller: "DataVehicleController",
      templateUrl: "/angular-app/vehicle/vehicle_show_all/vehicles.html"
    })
    .when( "/data/profiles",{
			controller: "DataProfileController",
		    templateUrl: "/angular-app/profile/profiles.html"
	    })
		.when( "/data/profiles/:profile_id",{
			controller: "DataProfileDetailController",
			templateUrl: "/angular-app/profile/profileDetail.html"
		})

    /* Landing Page */
    .when( "/",{
			redirectTo: "/home"
		})
    .when( "/home", {
			controller: "HomeController",
			templateUrl: "/angular-app/home/home.html",
      access:{
        restricted:false
      }
		})
    .when("/public/index", {
			//redirectTo: "/home"
			controller: "PublicController",
			templateUrl: "/angular-app/main/index.html",
      access:{
        restricted:false
      }
		})


  /* Dealer */
  .when("/public/dealer/dealerSignup",{
    controller: "DealerSignupController",
    templateUrl: "/angular-app/dealer/dealer_signup/dealerSignup.html",
    controllerAs: 'vm'

  })
  .when("/public/dealer/dealerSignin",{
    controller: "DealerSigninController",
    templateUrl: "/angular-app/dealer/dealer_signin/dealerSignin.html",
    controllerAs: 'vm'
  })


  /* Vehicle */
  .when('/public/vehicle/addvehicle', {
    controller: "VehiclesAddController",
    templateUrl: "/angular-app/vehicle/vehicle_add/addVehicle.html",
    controllerAs: 'vm'
  })
  .when('/public/vehicle/vehicles', {
    controller: "VehiclesListController",
    templateUrl: "/angular-app/vehicle/vehicle_list/vehicleslist.html",
    controllerAs: 'vm'
  })


	// Redirect to 404
  .otherwise({
		redirectTo:
		"/404_page"
	});

});


naBaseApp.run(function($rootScope, $location, $window, AuthFactory){
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if(  nextRoute.access !== undefined && nextRoute.access.restricted && !window.sessionStorage.token && !AuthFactory.isSignedIn ) {
      event.preventDefault();
      $location.path('#/public/index')
    }
  });
})
