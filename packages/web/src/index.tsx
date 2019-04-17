import 'semantic-ui-css/semantic.min.css'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { stores } from './stores'
import VideoPlayer from './Components/mobx/VideoPlayer';

ReactDOM.render(
    <Provider {...stores}>
        <VideoPlayer />
    </Provider>,
    document.getElementById('app'), () => console.log('got it')
);
