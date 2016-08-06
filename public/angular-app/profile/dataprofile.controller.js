(function () {

    function DataProfileController ($scope, dataProfileProvider) {

        $scope.page_load_error = null;
        $scope.finished_loading = false;
		
		function get_profiles(){
            $scope.profiles = dataProfileProvider.getAllProfiles(function (err, profiles) {
                $scope.finished_loading = true;
                if (err) {
                    $scope.page_load_error = err.message;
                } else {
					console.log("DEBUG => data + " + profiles);
                    $scope.profiles = profiles;
                }                
            });
		};
		
		function get_profiles2(){
            $scope.profiles = dataProfileProvider.getProfiles(function (err, profiles) {
                $scope.finished_loading = true;
                if (err) {
                    $scope.page_load_error = err.message;
                } else {
					console.log("DEBUG => data + " + profiles);
                    $scope.profiles = profiles;
                }                
            });
		};

		//get_profiles();
		get_profiles2();
    }

    naBaseApp.controller("DataProfileController", ['$scope', 'dataProfileProvider', DataProfileController]);

})();
