(function () {


function AddCondition($scope, addConditionProvider){
  console.log(this)
  let vm = this;
  let conditionData = JSON.stringify({
    'submitter': "submitter",
    'activity': 'add',
    'owner': '',
    'condition': vm.condition,
  })

  addConditionProvider.addConditionData(conditionData)
}

naBaseApp.controller("AddCondition", ['$scope', 'addConditionProvider', AddCondition]);

})();
