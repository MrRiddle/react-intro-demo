import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player/';

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