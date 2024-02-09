
import React from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: '10px',
  width: '100px',
  playerVars: {
    autoplay: 1,
  },
};


function onReady(event: any, autoPlay: any, currentSeek: any, setIsAudioLoading: any) {

  setIsAudioLoading(false);

  const duration = event.target.getDuration();
  const tenPercent = duration * currentSeek;
  event.target.seekTo(tenPercent, true);
  if (autoPlay) {
    event.target.playVideo();
  } else {
    event.target.pauseVideo();
  }

}

type props = {
  videoId: string;
  autoPlay: boolean;
  setIsAudioLoading: Function;
}

function AudioPlayer({ videoId, autoPlay, setIsAudioLoading }: props) {
  return (<>
    <YouTube videoId={videoId} opts={opts} onReady={(event) => onReady(event, autoPlay, 0.01, setIsAudioLoading)} />
  </>)
}

export { AudioPlayer }
