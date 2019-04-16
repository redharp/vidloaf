import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { ISubredditVideosStore } from '../../stores/videoStore'
import { Video } from '../../components/videos/Video';
import { VideoNavButtons } from '../../components/Video/VideoNavButtons';
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
    prevVideo = () => {
        this.props.subredditStore.prevVideo();
    }

    nextVideo = () => {
        this.props.subredditStore.nextVideo();
    }

    render() {
        return (
            <Container className="goodContainer" textAlign="center">
                <Segment raised>
                    <Video {...this.props.subredditStore.video} />
                    <VideoNavButtons
                        {...{
                            prevVideo: this.prevVideo,
                            nextVideo: this.nextVideo,
                        }}
                    />
                </Segment>
            </Container>
        );
    }
}

export default VideoPlayer;
