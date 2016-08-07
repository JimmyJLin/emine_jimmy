var naBaseApp = angular.module("naBaseApp", [ "ngRoute" ]);

naBaseApp.config(function ($routeProvider) {

    $routeProvider

		// non-public home
		.when( "/home", {
			controller: "HomeController",
			templateUrl: "/angular-app/home/home.html"
		})
    // public/home
		.when("/public/index", {
			//redirectTo: "/home"
			controller: "PublicController",
			templateUrl: "/angular-app/main/index.html"
		})
		.when("/public/about/contact",{
			controller: "PublicController",
			templateUrl: "/angular-app/main/aboutContact.html"
		})
		.when("/public/about/faqs", {
			controller: "PublicController",
			templateUrl: "/angular-app/main/aboutFAQs.html"
		})
		.when("/public/about/whoweare", {
			controller: "PublicController",
			templateUrl: "/angular-app/main/aboutWhoWeAre.html"
		})


    // route for vehicles

    .when( "/data/vehicles",{
      controller: "DataVehicleController",
      templateUrl: "/angular-app/vehicle/vehicle_show_all/vehicles.html"
    })

    // public/vehicle add

    .when('/public/vehicle/addvehicle', {
      controller: "DataNewVehicleController",
      templateUrl: "/angular-app/vehicle/vehicle_add/addVehicle.html"
    })

    // public/vehicle
    .when("/public/vehicle/vehicleListing", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/vehicleListing.html"
    })
    .when("/public/vehicle/public.controllerSearch", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/advancedSearch.html"
    })
    .when("/public/vehicle/vehicleDetail", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_show_one/vehicleDetail.html"
    })
    .when("/public/vehicle/newVehicle", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/basicSearch.html"
    })
    .when("/public/vehicle/usedVehicle", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/basicSearchUsed.html"
    })
    .when("/public/vehicle/searchResults", {
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/searchResults.html"
    })

    // public/dealer area
    .when("/public/dealer/dealerSignup",{
      //redirectTo: "/public/index"
      controller: "DealerSignupController",
      templateUrl: "/angular-app/dealer/dealer_signup/dealerSignup.html",
      controllerAs: 'vm'

    })
    .when("/public/dealer/dealerSignin",{
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/dealer_signin/dealerSignin.html",
      controllerAs: 'vm'
    })
    .when("/public/dealer/addVehiclesByVIN", {
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/addVehiclesByVIN.html"
    })
    .when("/public/dealer/createPassword",{
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/dealer_signup/createPassword.html"
    })
    .when("/public/dealer/dealerDetail", {
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/dealer_detail/dealerDetail.html"
    })
    .when("/public/dealer/profileLanding", {
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/profileLanding.html"
    })
    .when("/public/dealer/dealerSearch", {
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/dealer_search/dealerSearch.html"
    })
    .when("/public/dealer/dealerSearchResults",{
      controller: "PublicController",
      templateUrl: "/angular-app/dealer/dealer_search/dealerSearchResults.html"
    })
    .when("/public/dealer/vehicleListing",{
      controller: "PublicController",
      templateUrl: "/angular-app/vehicle/vehicle_search/vehicleListing.html"
    })

		// data
		.when( "/data/profiles",{
			controller: "DataProfileController",
		    templateUrl: "/angular-app/profile/profiles.html"
	    })
		.when( "/data/profiles/:profile_id",{
			controller: "DataProfileDetailController",
			templateUrl: "/angular-app/profile/profileDetail.html"
		})


		// public/tools
		.when("/public/tools/vinDecoder", {
			controller: "PublicController",
			templateUrl: "/angular-app/tools/vinDecoder.html"
		})
		// public/test
		.when("/public/test",{
			controller: "PublicController",
			templateUrl: "/angular-app/vehicle/vehicle_search/vehicleListing.html"
		})
    .when( "/",{
			redirectTo: "/home"
		})
		// end
    .otherwise({
			redirectTo:
			"/404_page"
		});

});
