angular.module('naBaseApp').controller('VehiclesAddController', VehiclesAddController);

function VehiclesAddController($http){
  let vm = this;
  const addVehicle = JSON.stringify({
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

  function addVehicle(){
    $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicle)
      .then(function(response){
        console.log("Vehicle posted!")
      })
      .catch(function(error){
        console.log("Unable to Add vehicle, error: ", error)
      })

  }


}
