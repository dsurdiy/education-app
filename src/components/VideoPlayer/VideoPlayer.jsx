import Hls from 'hls.js';

export const VideoPlayer = ({ link }) => {
  const video = document.getElementById('video');
  const videoSrc = `${link}`;
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }

  return (
    <div>
      <video id="video"></video>
    </div>
  );
};
