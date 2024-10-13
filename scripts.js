// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script');
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an array to hold the player objects
var players = [];

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe, index) => {
        players[index] = new YT.Player(iframe, {
            events: {
                'onReady': onPlayerReady
            }
        });
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('Player ready:', event.target);
}

// Play all videos
document.getElementById('playAll').addEventListener('click', function() {
    players.forEach(player => {
        player.playVideo();
    });
});

// Pause all videos
document.getElementById('pauseAll').addEventListener('click', function() {
    players.forEach(player => {
        player.pauseVideo();
    });
});

// Refresh all videos
document.getElementById('refreshAll').addEventListener('click', function() {
    players.forEach(player => {
        player.stopVideo();
        player.playVideo();
    });
});
