(function () {

    function addCondition ($http) {

      this.addConditionData = function(data){
        console.log('passed data', data)
        alert('cqwqwlicked')

        $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', data)
          .then(function(response){
            console.log("Condition posted!", response)
          })
          .catch(function(error){
            console.log("Unable to Add condition, error: ", error)
          })

      }


    }

    naBaseApp.service("addCondition", [ "$http", addCondition]);

})();
