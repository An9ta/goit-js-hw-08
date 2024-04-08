import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

//Zapisuj czas odtwarzania w local storage. Niech kluczem w storage będzie "videoplayer-current-time".
//Przy przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego
//momentu.
iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - czyli aktualizacje czasu
//odtwarzania.
iframePlayer.on('timeupdate', function (data) {
  delayedTimeUpdate(data);
});
//Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował
//się w storage nie częściej niż raz na sekundę.
const delayedTimeUpdate = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
