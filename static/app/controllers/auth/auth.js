(function () {

  function AuthController ($scope, $http, authProvider) {
  $scope.formData = {};

  console.log('this is the scope ', $scope)

  $scope.submitForm = function() {
    alert('hit')
    // $http({
    // method  : 'POST',
    // url     : 'process.php',
    // data    : $.param($scope.formData),  // pass in data as strings
    // headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
  //  })
    // .success(function(data) {
    //   console.log(data);
    // });
  };
};


  // app.controller('FormCtrl', function ($scope, $http) {
  //
  //      var formData = {
  //         emailaddress: "default",
  //         password: "default"
  //       };
  //
  //     $scope.save = function() {
  //         formData = $scope.form;
  //     };
  //
  //     $scope.submitForm = function() {
  //         console.log("posting data....");
  //         formData = $scope.form;
  //         console.log(formData);
  //         //$http.post('', JSON.stringify(data)).success(function(){/*success callback*/});
  //     };
  //  });

   naBaseApp.controller("AuthController", ['$scope', 'authProvider', AuthController]);


})();
