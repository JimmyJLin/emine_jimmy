(function () {

    function DataVehicleController ($scope, dataVehicleProvider) {

        $scope.page_load_error = null;
        $scope.finished_loading = false;
		
		function get_vehicles(){
            $scope.vehicles = dataVehicleProvider.getVehicles(function (err, vehicles) {
                $scope.finished_loading = true;
                if (err) {
                    $scope.page_load_error = err.message;
                } else {
					console.log("DEBUG => data --> " + vehicles);
                    $scope.vehicles = vehicles;
                }                
            });
		};

		get_vehicles();
    }

    naBaseApp.controller("DataVehicleController", ['$scope', 'dataVehicleProvider', DataVehicleController]);

})();
