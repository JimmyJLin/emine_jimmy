(function () {

    // 1. declare our controller.
    function DealerSignupController ($scope, dealerProvider) {
      var vm = this;
      vm.test = "test";

      vm.register = function(){
        console.log('this is from the register function' ,vm)
          var user = JSON.stringify({
            submitter: "submitter",
            username: vm.email,
            password: vm.password,
            activity: 'add'
          })
          console.log('this is the user object' ,user)

          if(!vm.email || !vm.password) {
             vm.error = 'Please enter email address and password'
          } else {
            if(vm.password !== vm.passwordRepeat){
              vm.error = 'Please make sure the passwords match'
            } else {

              dealerProvider.registerDealer(user)

            }
          }

    }

    }

    naBaseApp.controller("DealerSignupController", ['$scope', 'dealerProvider', DealerSignupController]);

})();
