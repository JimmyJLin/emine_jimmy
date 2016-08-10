angular.module('naBaseApp').controller('VehiclesListController', VehiclesListController);

function VehiclesListController($http){
  let vm = this;
  const getAll = JSON.stringify({
    'submitter': "test",
    'activity': 'getall'
  })

  function vehiclesList(){
    $http.post('http://api.nationsauction.com/inventory/Vehicle/Get', getAll)
      .then(function(response){
        return response.data
      })
      .catch(function(error){
        console.log("Unable to get vehicle list, error:", error)
      })

  }


}
