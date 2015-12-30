/**
 * Created by sczerwinski on 2015-12-28.
 */
'use strict';
eventsApp.controller("EditEventController",
    function EditEventController($scope){
        $scope.saveEvent = function(event){
            window.alert('event ' + event.name + ' saved!');
        }
        $scope.cancelEdit = function(){
            window.location = "/EventDetails.html"
        }
    }
);
