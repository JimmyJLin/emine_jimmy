(function () {

    function vehicleListProvider ($http) {

      this.getVehicleByOwnerID = function(vehicleListData){
        console.log(vehicleListData)
        $http({
          method: 'POST',
          url: 'http://api.nationsauction.com/inventory/Vehicle/GetByOwner',
          headers: {'Content-Type': 'application/json'},
          data: vehicleListData
        })
        // $http.post('http://api.nationsauction.com/inventory/Vehicle/GetByOwner', vehicleListData)
          .then(function(response){
            console.log('this is the response', response.data)
            vm.vehicles = response
          })
          .catch(function(error){
            console.log("Unable to get vehicle data, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleListProvider", [ "$http", vehicleListProvider]);

})();
