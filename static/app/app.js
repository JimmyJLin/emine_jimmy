var naBaseApp = angular.module("naBaseApp", [ "ngRoute" ]);

naBaseApp.config(function ($routeProvider) {
	
    $routeProvider
		.when( "/home",
			   {
				 controller: "HomeController",
				 templateUrl: "/app/partials/home/home.html"
			   }
		)
		.when( "/data/profiles", 
		       { 
				 controller: "DataProfileController", 
		         templateUrl: "/app/partials/data/profiles.html" 
	           }
		)
		.when( "/data/profiles/:profile_id",
			   {
				   controller: "DataProfileDetailController",
				   templateUrl: "/app/partials/data/profileDetail.html"
			   }
		)
		// route for vehicles
		.when( "/data/vehicles",
			   {
				   controller: "DataVehicleController",
				   templateUrl: "/app/partials/data/vehicles.html"
			   }
		)
		.when("/public/index",
			  {
				  //redirectTo: "/home"
				  controller: "PublicController",
				  templateUrl: "/app/views/public/home/index.html"
			  }
		)
		.when("/public/dealer/dealerSignup",
		      {
				  //redirectTo: "/public/index"
				  controller: "PublicController",
				  templateUrl: "/app/views/public/dealer/dealerSignup.html"
		      }
		)
		.when("/public/dealer/dealerSignin",
		      {
				  controller: "PublicController",
				  templateUrl: "/app/views/public/dealer/dealerSignin.html"
		      }
	    )
		.when("/public/test",
		      {
				  controller: "PublicController",
				  templateUrl: "/app/views/public/dealer/dealerSignin.html"
		      }
	    )
        .when( "/",  
		       { 
			     redirectTo: "/home" 
			   }
		)
        .otherwise( { 
			          redirectTo: 
					  "/404_page" 
				    }
	    );
});
