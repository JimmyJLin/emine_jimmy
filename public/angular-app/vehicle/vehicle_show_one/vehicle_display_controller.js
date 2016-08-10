angular.module('naBaseApp').controller('VehicleListController', VehicleListController);

function VehicleListController($http){
  let vm = this;
  const getOne = JSON.stringify({
    'submitter': "submitter",
    'ownerGuid': "102611ed-3e9b-4c5f-8db2-b19b6d6d0109"
    'activity': 'getbyowner'
  })

  function vehicleList(){
    $http.post('http://api.nationsauction.com/inventory/Vehicle/Get', getOne)
      .then(function(response){
        vm.vehicle = response.data
        return vm.vehicle
      })
      .catch(function(error){
        console.log("Unable to get vehicle, error: ", error)
      })

  }


}
