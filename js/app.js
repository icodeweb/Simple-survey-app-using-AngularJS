// https://google.github.io/styleguide/angularjs-google-style.html#controllers

var app = angular.module('myApp', []);

app.controller('surveyCtrl', function($scope) {
    
	$scope.resultsList = false;
	$scope.surveyList = true;
	$scope.succcessPanel = false;

	// $scope.languages = {'Javascript':10,'Python':10, 'Ruby':10,'PHP':10,'Java':10};

	$scope.languages = [
							{'language':'PHP', 'votes' : 10},
							{'language':'Javascript', 'votes' : 10},
							{'language':'Python', 'votes' : 10},
							{'language':'Ruby', 'votes' : 10}
						]

	$scope.vote = function(index){
		// ++$scope.languages[language];
		
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
