var naBaseApp = angular.module("naBaseApp", [ "ngRoute" ]);

naBaseApp.config(function ($routeProvider) {
	
    $routeProvider
		// non-public home
		.when( "/home", {
			controller: "HomeController",
			templateUrl: "/app/partials/home/home.html"
		})
		
		// data 
		.when( "/data/profiles",{ 
			controller: "DataProfileController", 
		    templateUrl: "/app/partials/data/profiles.html" 
	    })
		.when( "/data/profiles/:profile_id",{
			controller: "DataProfileDetailController",
			templateUrl: "/app/partials/data/profileDetail.html"
		})
		
		// route for vehicles
		.when( "/data/vehicles",{
		    controller: "DataVehicleController",
			templateUrl: "/app/partials/data/vehicles.html"
		})
		
		// public/home
		.when("/public/index",{
			//redirectTo: "/home"
			controller: "PublicController",
			templateUrl: "/app/views/public/home/index.html"
		})
		.when("/public/about/contact",{
			controller: "PublicController",
			templateUrl: "/app/views/public/home/aboutContact.html"
		})
		.when("/public/about/faqs", {
			controller: "PublicController",
			templateUrl: "/app/views/public/home/aboutFAQs.html"
		})
		.when("/public/about/whoweare", {
			controller: "PublicController",
			templateUrl: "/app/views/public/home/aboutWhoWeAre.html"
		})
		
		// public/dealer area
		.when("/public/dealer/dealerSignup",{
			//redirectTo: "/public/index"
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/dealerSignup.html"
		})
		.when("/public/dealer/dealerSignin",{
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/dealerSignin.html"
		})
		.when("/public/dealer/addVehiclesByVIN", {
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/addVehiclesByVIN.html"
		})
		.when("/public/dealer/createPassword",{
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/createPassword.html"
		})
		.when("/public/dealer/dealerDetail", {
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/dealerDetail.html"
		})
		.when("/public/dealer/profileLanding", {
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/profileLanding.html"
		})
		.when("/public/dealer/dealerSearch", {
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/dealerSearch.html"
		})
		.when("/public/dealer/vehicleListing",{
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/vehicleListing.html"
		})
		.when("/public/dealer/dealerSearchResults",{
			controller: "PublicController",
			templateUrl: "/app/views/public/dealer/dealerSearchResults.html"
		})
		
		
		// public/tools
		.when("/public/tools/vinDecoder", {
			controller: "PublicController",
			templateUrl: "/app/views/public/tools/vinDecoder.html"
		})
		
		// public/vehicle
		.when("/public/vehicle/vehicleListing", {
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/vehicleListing.html"
			}
		)
		.when("/public/vehicle/advancedSearch", {
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/advancedSearch.html"
		})
		.when("/public/vehicle/vehicleDetail", {
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/vehicleDetail.html"
		})
		.when("/public/vehicle/basicSearch", {
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/basicSearch.html"
		})
		.when("/public/vehicle/searchResults", {
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/searchResults.html"
		})
		
		// public/test 
		.when("/public/test",{
			controller: "PublicController",
			templateUrl: "/app/views/public/vehicle/vehicleListing.html"
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
