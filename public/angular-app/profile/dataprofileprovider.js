(function () {

    function dataProfileProvider ($http) {

        this._server_host = "";
<<<<<<< HEAD
		
=======

>>>>>>> 2aa77a45e6a7eae6d805fbc3ddf544187d0edb88
		this.getAllProfiles = function(callback){
        	$http.get(this._server_host + "/v1/profiles.json")
            	.success(function (data, status, headers, conf) {
                	callback(null, data);
            	})
            	.error(function (data, status, headers, conf) {
                	callback(data);
            	});
		};
<<<<<<< HEAD
		
=======

>>>>>>> 2aa77a45e6a7eae6d805fbc3ddf544187d0edb88
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
<<<<<<< HEAD
		
=======

>>>>>>> 2aa77a45e6a7eae6d805fbc3ddf544187d0edb88
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
<<<<<<< HEAD
                
=======

>>>>>>> 2aa77a45e6a7eae6d805fbc3ddf544187d0edb88
    }

    naBaseApp.service("dataProfileProvider", [ "$http", dataProfileProvider]);

})();
