(function () {

    function addCondition ($http) {

      this.addConditionData = function(addVehicleData){
        $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', addVehicleData)
          .then(function(response){
            console.log("Vehicle posted!", response)
          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }


    }

    naBaseApp.service("addCondition", [ "$http", addCondition]);

})();
