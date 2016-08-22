
var app = angular.module('myApp', []);
app.controller('surveyCtrl', function($scope) {
	$scope.resultsList = false;
	$scope.surveyList = true;
	$scope.succcessPanel = false;
	$scope.languages = [
							{'language':'PHP', 'votes' : 0},
							{'language':'Javascript', 'votes' : 0},
							{'language':'Python', 'votes' : 0},
							{'language':'Ruby', 'votes' : 0}
						];

	$scope.vote = function(index){
		++$scope.languages[index].votes;
		$scope.succcessPanel = true;
		$scope.surveyList = false;
	}

	$scope.showResult = function(language){
		$scope.succcessPanel = false;
		$scope.resultsList = true;
	}

	$scope.voteAgain = function(language){
		$scope.resultsList = false;
		$scope.surveyList = true;
	}
});