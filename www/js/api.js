(function() {

  'use strict';
  angular.module('starter').service('api', ['$q',function ($q) {
    this.jobs=[{"id":1,"title":"Cleaning 1"},{"id":2,"title":"Cleaning 2"}]
    this.myjobs=[{"id":3,"title":"Cleaning 3"},{"id":4,"title":"Cleaning 4"}]

    this.getJobs=function(){
      return this.jobs
    }
    this.getJob=function(jobId){
       var dfd = $q.defer();
       this.jobs.forEach(function(job){
        if(job.id==jobId) dfd.resolve(job)
       })
       return dfd.promise
    }
    this.getMyjobs =function(){
      return this.myjobs;
    }
    this.getMyJob=function(jobId){
       var dfd = $q.defer();
       this.myjobs.forEach(function(job){
        if(job.id==jobId) dfd.resolve(job)
       })
       return dfd.promise
    }

  }])

})();
