import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ISubredditVideosStore } from '../../stores/videoStore'
import { Video } from '../../components/videos/Video';

interface AppProps {
    subredditStore?: ISubredditVideosStore
}

@inject('subredditStore')
@observer
class VideoPlayer extends Component<AppProps> {
    componentWillMount() {
        this.props.subredditStore.fetchVideos()

    }
    render() {
        return (<div>
            <Video {...this.props.subredditStore.video} />
            <button onClick={ () => this.props.subredditStore.prevVideo()}>Prev</button>
            <button onClick={() => this.props.subredditStore.nextVideo()}>Next</button>
        </div>
        )
    }
}

export default VideoPlayer;
