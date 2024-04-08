import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

iframePlayer.on('timeupdate', data => {
  delayedUpdate(data);
});

const delayedUpdate = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
