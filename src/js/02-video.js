import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.getElementById("vimeo-player")

const player = new Player(iframeEl);

player.on('timeupdate', throttle(onTime,1000))

function onTime ({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds)
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
