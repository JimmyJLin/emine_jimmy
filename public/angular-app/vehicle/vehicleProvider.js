(function () {

  var apiURL = 'http://api.nationsauction.com/inventory/';


    function vehicleProvider ($http) {

      this.addVehicle = function(addVehicleData){
        console.log(addVehicleData, apiURL)
        $http.post(apiURL + 'Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }



      this.showOneVehicle = function(getOne){

            $http.post(apiURL +'/Vehicle/GetByID', getOne)
            .then(function(response){
              console.log(response, 'this is getOne')
              console.log(this.vehicle)
              return this.vehicle
            })
            .catch(function(error){
              console.log("Unable to get vehicle, error: ", error)
            })
          }


        }

    naBaseApp.service("vehicleProvider", [ "$http", vehicleProvider]);

})();
