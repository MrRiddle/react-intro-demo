import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player/';

const MUSIC_SRC = 'http://dl.stream.qqmusic.qq.com/M8000039MnYb0qxYhV.mp3?vkey=E9ADDEAF7C4A22EE7D13BF2A369F9E0F2483B2CDC40BF3D4650C041AA18280AC688438D990F6B2A254D2D9789BCD74ABB333436CA3877992&guid=5150825362&fromtag=1';
const COVER_SRC = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg?max_age=2592000';

const MUSIC = {
    title: '晴天',
    artist: '周杰伦',
    src: MUSIC_SRC,
    cover: COVER_SRC
};

ReactDOM.render(
    <Player {...MUSIC} />,
    document.getElementById('app')
);