var player = videojs('videoPlayer', {
    controls: true,
    preload: 'auto',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg',
    fluid: true,
    aspectRatio: '16:7',
    playbackRates: [0.25,0.50,1,1.5,2],
    plugins: {
        hotkeys: {
            enableModifiersForNumbers: false,
            seekStep: 1.5
        }
    }
});