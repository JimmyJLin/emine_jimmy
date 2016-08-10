(function () {


function VehicleDetailController($scope, vehicleProvider){
  var vm = this;

  var getOne = JSON.stringify({
    'submitter': "test",
    'vehicleGuid': '720229CE-9829-43D9-AAB4-3A3265073EDB',
    'activity': 'getbyid'
  })

  vehicleProvider.showOneVehicle(getOne);


}

naBaseApp.controller("VehicleDetailController", ['$scope', 'vehicleProvider', VehicleDetailController]);

})();
