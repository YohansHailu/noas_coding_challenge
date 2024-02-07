
import React from 'react';
import YouTube from 'react-youtube';



const opts = {
  height: '0',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};



function onReady(event: any, autoPlay: any, currentSeek: any) {
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
}

function AudioPlayer({ videoId, autoPlay }: props) {
  return (<>
    <YouTube videoId={videoId} opts={opts} onReady={(event) => onReady(event, autoPlay, 0.05)} />
  </>)
}

export { AudioPlayer }
