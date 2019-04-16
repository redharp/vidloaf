import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { ISubredditVideosStore } from '../../stores/videoStore'
import { Video } from '../../components/videos/Video';
import './index.css';
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
        return (
        <Container className='goodContainer' textAlign='center'>
            <Video {...this.props.subredditStore.video} />
            <Button onClick={() => this.props.subredditStore.prevVideo()}>Prev</Button>
            <Button onClick={() => this.props.subredditStore.nextVideo()}>Next</Button>
        </Container>
        )
    }
}

export default VideoPlayer;
