angular
.module('app',['ui.router'])
.config(function config($stateProvider) {
	$stateProvider
	.state('index',{
		url:'',
		controller: 'firstCtrl as first',
		templateUrl: 'templates/first.html'
	})
	.state('second',{
		url: '/second',
		controller: 'secondCtrl as second',
		templateUrl: 'templates/second.html'
	})
})
.service('greeting', function () {
	var greeting = this;
	greeting.message = 'default';
})
.controller('firstCtrl', function( greeting){
	var first = this;
	first.greeting = greeting;
	// $scope.first = this ;
	// $scope.first = greeting;
})
.controller('secondCtrl', function( greeting){
	var second = this;
	second.greeting = greeting;
	// $scope.second = this;
	// $scope.second = greeting;
})

