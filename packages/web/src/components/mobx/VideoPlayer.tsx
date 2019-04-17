import React, { Component } from 'react';
import { Container, Segment, Button, List, Item, Loader} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { ISubredditVideosStore } from '../../stores/videoStore'
import { Video } from '../../components/videos/Video';
import { VideoNavButtons } from '../../components/Video/VideoNavButtons';
import './index.css';

interface AppProps {
    subredditStore?: ISubredditVideosStore,
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

    setSubreddit = (subreddit: string) => {

        this.props.subredditStore.setSubreddit(subreddit);
    }

    render() {
        return (
            <Container className="goodContainer" textAlign="center">
                <Item>
                {
                    `r/${this.props.subredditStore.subreddit}`
                }
                </Item>
                <Segment raised>
                    {
                        this.props.subredditStore.state !== 'done' ?
                            <Loader active /> :
                            <Video {...this.props.subredditStore.video} />
                    }
                    <VideoNavButtons
                        {...{
                            prevVideo: this.prevVideo,
                            nextVideo: this.nextVideo,
                        }}
                    />
                    <List>
                        <List.Item as='a' onClick={ () => this.setSubreddit('videos')}>
                            r/videos
                        </List.Item>
                        <List.Item as='a' onClick={ () => this.setSubreddit('livestreamfail')}>
                            r/livestreamfail
                        </List.Item>
                        <List.Item as='a' onClick={ () => this.setSubreddit('gaming')}>
                            r/gaming
                        </List.Item>
                        <List.Item as='a' onClick={ () => this.setSubreddit('nba')}>
                            r/nba
                        </List.Item>
                        <List.Item as='a' onClick={ () => this.setSubreddit('popular')}>
                            r/popular
                        </List.Item>
                        <List.Item as='a' onClick={ () => this.setSubreddit('documentaries')}>
                            r/documentaries
                        </List.Item>
                    </List>
                </Segment>
            </Container>
        );
    }
}

export default VideoPlayer;
