(function () {


function VehiclesListController($scope, vehicleListProvider){
  var vm = this;

  vm.listVehicles = function(){
    var ownerGuid = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

      var vehicleListData = JSON.stringify({
        'submitter': "submitter",
        'ownerGuid': ownerGuid,
        'activity': 'getbyowner'
      })


  vehicleListProvider.getVehicleByOwnerID(vehicleListData);

      }
}
  naBaseApp.controller("VehiclesListController", ['$scope', 'vehicleListProvider', VehiclesListController]);

})();
