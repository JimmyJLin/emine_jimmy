(function () {

    function dataProfileProvider ($http) {

        this._server_host = "";

		this.getAllProfiles = function(callback){
        	$http.get(this._server_host + "/v1/profiles.json")
            	.success(function (data, status, headers, conf) {
                	callback(null, data);
            	})
            	.error(function (data, status, headers, conf) {
                	callback(data);
            	});
		};

		this.getProfiles = function(callback){
			var getData = {
				"submitter": "system"
			};

			$http({
			    url: 'http://api.nationsauction.com/auth/APIAuth/GetActiveProfiles',
			    method: "POST",
			    data: getData,
			    headers: {'Content-Type': 'application/json'}
			}).success(function (data, status, headers, config) {
			    callback(null, JSON.parse(data));
			}).error(function (data, status, headers, config) {
			    callback(data);
			});
		};

		this.getProfileByID = function (profile_id, callback){
			var getData = {
				"submitter": "system",
				"guid": profile_id
			};

			$http({
			    url: 'http://api.nationsauction.com/auth/APIAuth/GetProfileByGuid',
			    method: "POST",
			    data: getData,
			    headers: {'Content-Type': 'application/json'}
			}).success(function (data, status, headers, config) {
			    callback(null, JSON.parse(data));
			}).error(function (data, status, headers, config) {
			    callback(data);
			});
		};

    }

    naBaseApp.service("dataProfileProvider", [ "$http", dataProfileProvider]);

})();
