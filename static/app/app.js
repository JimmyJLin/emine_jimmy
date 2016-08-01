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
