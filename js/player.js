let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      height: '405',
      width: '660',
      videoId: 'Cj7WQxhTVtw',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      },
      playerVars: {
          contols: 0,
          disblekb: 0,
          showinfo: 0,
          rel:0,
          autoplay: 0,
          modestbrnding: 0
        }
    });
}