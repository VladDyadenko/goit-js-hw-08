import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.getElementById("vimeo-player")

const player = new Player(iframeEl);
const VIMEO_KEY = "videoplayer-current-time";

loadTime();

player.on('timeupdate', throttle(onTime,1000))

function onTime ({seconds}) {
    localStorage.setItem(VIMEO_KEY, seconds)
}

function getSaveTime(){
    return JSON.parse(localStorage.getItem(VIMEO_KEY)) || 0;
    
}

function loadTime (){
    const currentLoadTime = getSaveTime();
    console.log(currentLoadTime);

    player.setCurrentTime(currentLoadTime);
    
}





