(function() {
angular.module('mkkVideo', []);


angular.module('mkkVideo').directive('mkkVideo', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            vdosrc: '@?',
            control:'@?'
        },
        template: [
            '<div class="video-container">',
                '<div class="media-container">',
                    '<video id="video-player" ng-src="{{vdosrc}}" type="video/mp4">',
                    '</video>',
                '</div>',
                '<div class="video-controls" ng-if="isControl">',
                '<div class="btn play-pause-btn" ng-click="toggleVideo()"><i class="fa fa-play"> </i><i class="fa fa-pause"></i> </div>',
                '<div class="vdo-time">{{currentTime}}</div>',
                '<div class="btn progress-btn">',
                    '<div class="progress">',
                      '<div class="progress-bar" role="progressbar" style="width: {{currentPerct}}%" aria-valuenow="{{currentPerct}}" aria-valuemin="0" aria-valuemax="100"></div>',
                    '</div>',
                '</div>',
                '<div class="vdo-time">{{durationTime}}</div>',
                '<div class="btn mute-unmute-btn" ng-click="toggleMute()"><i class="fa fa-volume-up"></i> <i class="fa fa-volume-off"></i></div>',
                '<div class="btn full-screen-btn" ng-click="toggleFullscreen()"><i class="fa fa-compress" aria-hidden="true"></i> <i class="fa fa-expand" aria-hidden="true"></i></div>',
                '</div>',
                '<div class="play-container" ng-click="toggleVideo()">',
                    '<div class="icon-container">',
                        '<i class="fa fa-play"></i>',
                    '</div>',
                '</div>',
            '</div>'
        ].join(''),
        link: function(scope){  
           

        },
        controller: function ($scope) {
            var video = null;
            $scope.isControl = true;
            if($scope.control == 'false'){
                $scope.isControl = false;
            }
            $scope.currentTime =  '00:00';
            $scope.durationTime =  '00:00';
            $scope.isFullscreen = false;
            $scope.currentPerct = 0;
            
            $("video").on("canplay", function (e) {
                video = e.target;
                $scope.durationTime = stringToTime(e.target.duration);
                $scope.$apply();
               
            });

            $scope.toggleVideo = function(){
                if(video.paused){
                    video.play();
                    $('.video-container').addClass('playing');
                }
                else{
                    video.pause();
                    $('.video-container').removeClass('playing');
                }
            }

            $scope.toggleMute = function(){
                if(video.muted){
                    video.muted = false;
                    $('.mute-unmute-btn').removeClass('mute');
                }
                else{
                    video.muted = true;
                    $('.mute-unmute-btn').addClass('mute');
                }
            }

            $scope.toggleFullscreen = function(){
                if($scope.isFullscreen){
                    $scope.isFullscreen = false;
                    $('.video-container').removeClass('fullscreen');
                }
                else{
                    $scope.isFullscreen = true;
                    $('.video-container').addClass('fullscreen');
                }
            }

            $("video").on("pause", function (e) {
                // console.log("Video paused. Current time of videoplay: " + e.target.currentTime );
            });

            $("video").on("ended", function (e) {
                $('.video-container').removeClass('playing');

            });

            $("video").on("timeupdate", function (e) {
                $scope.currentPerct = (e.target.currentTime * 100) / e.target.duration;
             
                $scope.currentTime = stringToTime(e.target.currentTime);
                $scope.$apply(); 

                

              
            });

            

            function stringToTime(string){
                var sec_num = parseInt(string);
                var hours   = Math.floor(sec_num / 3600);
                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                var seconds = sec_num - (hours * 3600) - (minutes * 60);

                if (hours   < 10) {hours   = "0"+hours;}
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                return minutes+':'+seconds;
            }
        }
    };
});


}());