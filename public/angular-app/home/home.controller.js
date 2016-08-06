(function () {

    // 1. declare our controller.
    function HomeController ($scope, homeProvider) {

        $scope.page_load_error = null;
        $scope.finished_loading = false;
		
		function init(){
			// DEBUG: get number of registered AIPs.
			$scope.finished_loading = true;
		}

        init();
    }

    // 2. create the controller and give it $scope.
    naBaseApp.controller("HomeController", ['$scope', 'homeProvider', HomeController]);

})();
