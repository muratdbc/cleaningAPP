angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state,Auth) {


  // Form data for the login modal
  $scope.loginData = {};


  $scope.doLogin = function() {

    if(!angular.isDefined($scope.loginData.username) || !angular.isDefined($scope.loginData.password) || $scope.loginData.username.trim() == "" || $scope.loginData.password.trim() == ""){
       alert("Enter both user name and password");
       return;
    }

    Auth.setUser({
      username: $scope.loginData.username
    });

    $state.go("app.playlists");

  };

  $scope.logout = function() {
    Auth.logout();
    $state.go("login");
  };
})

.controller('PlaylistsCtrl', function($scope,jobs) {
  $scope.jobs = jobs
})

.controller('MyJobsCtrl', function($scope,myjobs) {
  $scope.myjobs = myjobs
})


.controller('PlaylistCtrl', function($scope,job) {
  $scope.job=job;
})

.controller('MyJobCtrl', function($scope,myjob) {
  $scope.myjob = myjob
})