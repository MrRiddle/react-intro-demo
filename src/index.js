import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player/';

// need to change to online address
// otherwise you may have to change address in min.js manually
// best way to fix this problem is changing webpack config which I have no time
const MUSIC = {
    title: '天涯歌女',
    artist: '周璇',
    src: '../asserts/music.mp3',
    cover: '../asserts/cover.jpg'
};

ReactDOM.render(
    <Player {...MUSIC} />,
    document.getElementById('app')
);