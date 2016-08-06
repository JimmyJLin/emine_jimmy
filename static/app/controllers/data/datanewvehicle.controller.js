(function () {

  function DataNewVehicleController ($scope, $dataNewVehicleProvider) {

    $scope.page_load_error = null;
    $scope.finished_loading = false;

    function init(){
      $scope.finished_loading = true;
    }

    init();

  }

    naBaseApp.controller("DataNewVehicleController", ['$scope', 'dataNewVehicleProvider', DataNewVehicleController]);

})();
