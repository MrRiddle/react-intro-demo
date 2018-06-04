import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import Counter from './counter';
import LifeCircle from './lifecircle';
import Player from './player';
import King from './king';

ReactDOM.render(
    <King />,
    document.getElementById('app')
);