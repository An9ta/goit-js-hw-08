import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

iframePlayer.on('timeupdate', function (data) {
  delayedTimeUpdate(data);
});

const delayedTimeUpdate = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
