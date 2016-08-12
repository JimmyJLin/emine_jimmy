(function () {

    function vehicleListProvider ($http) {
      var vm = this;

      this.getVehicleByOwnerID = function(vehicleListData){
        // console.log(vehicleListData)
        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/GetByOwner',
          method: 'POST',
          cache: 'false',
          contentType: 'application/json',
          headers: {'Content-Type': 'application/json'},
          data: vehicleListData
        })
        // $http.post('http://api.nationsauction.com/inventory/Vehicle/GetByOwner', vehicleListData)
          .then(function(response){
            vm.vehicles = response.data

            console.log('this is the response', vm.vehicles)
          })
          .catch(function(error){
            console.log("Unable to get vehicle data, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleListProvider", [ "$http", vehicleListProvider]);

})();
