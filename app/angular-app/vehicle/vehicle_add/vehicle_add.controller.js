(function () {


function VehiclesAddController($scope, vehicleProvider){
  console.log(this)
  let vm = this;
  let addVehicleData = JSON.stringify({
    'submitter': "submitter",
    'vin': vm.vin,
    'year': vm.year,
    'make': vm.make,
    'model': vm.model,
    'type': vm.type,
    'description': vm.description,
    'price': vm.price,
    'owner': vm.owner,
    'activity': 'add'
  })

  vehicleProvider.addVehicle(addVehicleData)
}

naBaseApp.controller("VehiclesAddController", ['$scope', 'vehicleProvider', VehiclesAddController]);

})();
