const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

// PLAY AND PAUSE VIDEO
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
}

// UPDATE PLAY ICON
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// UPDATE PROGRESS AND TIMESTAMP
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timeStamp.innerHTML = `${mins}:${secs}`

}

// SET VIDEO TIME TO PROGRESS
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

// STOP VIDEO
function stopVideo (){
    video.currentTime = 0;
    video.pause();
}


// EVENT LISTENERS
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)
