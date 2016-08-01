(function () {

    // 1. declare our controller.
    function DataProfileDetailController ($scope, $routeParams, dataProfileProvider) {

        $scope.finished_loading = false;
        $scope.page_load_error = null;

        dataProfileProvider.getProfileByID($routeParams.profile_id, function (err, profile) {
            $scope.finished_loading = true;
            if (err) {
                $scope.page_load_error = "Unable to load profile: " + JSON.stringify(err);
            } else {
                $scope.profile = profile;
            }
        });
        

    }

    // 2. create the controller and give it $scope.
    naBaseApp.controller("DataProfileDetailController", ['$scope', '$routeParams', 'dataProfileProvider', DataProfileDetailController]);

})();
