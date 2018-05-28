import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Player from './components/player/';

const MUSIC_SRC = 'http://10.16.3.27:8081/IXC1b089d2af8f8b8c91a5b06b22296cad2/C4000039MnYb0qxYhV.m4a?vkey=02CCBA79C18B908DBC84646620B313141CF194F80CD85B97E62F06DD28E238666FBA218C232D1389B1B6E3F9230C4F180A8D4C2DDA523237&guid=9921866514&uin=0&fromtag=66';
const COVER_SRC = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG.jpg?max_age=2592000';

ReactDOM.render(
    <Player music={MUSIC_SRC} cover={COVER_SRC} />,
    document.getElementById('app')
);