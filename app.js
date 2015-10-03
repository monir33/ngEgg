angular
.module('app', [])
.factory('Data', [function () {
	

	return {
		message: 'default message'
	};
}])
.controller('firstCtrl', ['$scope', 'Data', function ($scope,Data) {
	$scope.data = Data;
}])
.controller('secondCtrl', ['$scope', 'Data', function ($scope,Data) {
	$scope.data = Data;
	$scope.reverse = function(text){
		return text.split('').reverse().join('');
	}
}])