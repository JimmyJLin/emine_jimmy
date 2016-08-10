(function () {

    function dataVehicleProvider ($http) {
		
		console.log("DEBUG => start dataVehicleProvider.");

        this._server_host = "";
		
		this.getVehicles = function(callback){
			
			console.log("DEBUG => start getVehicles().");
			
			//var ownerGuid = "102611ED-3E9B-4C5F-8DB2-B19B6D6D0109";
			var ownerGuid = "745AF953-52F1-4EC1-ADF5-C4164D91B3ED";
			
			var getData = {
				"submitter": "system",
				"ownerGuid": ownerGuid
			};

			$http({
			    url: 'http://api.nationsauction.com/inventory/APIInventory/GetVehiclesByOwnerGuid',
			    method: "POST",
			    data: getData,
			    headers: {'Content-Type': 'application/json'}
			}).success(function (data, status, headers, config) {
				console.log("DEBUG => data > " + data);
				var testData = JSON.parse(data);
				
				console.log("DEBUG => testData count > " + testData.length);
				
				for(var i = 0; i < testData.length; i++)
				{
					var x = "test";//JSON.parse(testData[i].DataBasic));
					testData[i].DataBasic = JSON.parse(testData[i].DataBasic);
					testData[i].DataDetail = JSON.parse(testData[i].DataDetail);
					testData[i].DataSquishDetail = JSON.parse(testData[i].DataSquishDetail);
				}
				
				console.log("DEBUG => testData raw > " + testData);
				console.log("DEBUG => testData > " + JSON.stringify(testData));
			    callback(null, testData);
			}).error(function (data, status, headers, config) {
			    callback(data);
			});
		};
                
    }

    naBaseApp.service("dataVehicleProvider", [ "$http", dataVehicleProvider]);

})();
