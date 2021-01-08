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
function updateProgress (){
    return true;
}

// SET VIDEO TIME TO PROGRESS
function setVideoProgress(){
    return true;
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
video.addEventListener('timeUpdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)
