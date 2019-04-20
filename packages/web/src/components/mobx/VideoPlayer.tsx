import React, { Component } from 'react';
import { Container, Segment, List, Item, Loader} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { ISubredditVideosStore } from '../../stores/videoStore'
import { Video } from '../../Components/videos/Video';
import { VideoNavButtons } from '../../Components/Video/VideoNavButtons';
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
            <Container className='goodContainer' textAlign='center'>
                 <Item size='large'>{`r/${this.props.subredditStore.subreddit}`}</Item>
            <List celled horizontal>

                        <List.Item as='a' ref={'videos'} onClick={ () => this.setSubreddit('videos')}>
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
                <Segment size='massive' raised>
                    {
                        this.props.subredditStore.state !== 'done' ?
                            <Loader size='massive' active  /> :
                            <Video {...this.props.subredditStore.video} />
                    }
                </Segment>
                    <VideoNavButtons
                        {...{
                            prevVideo: this.prevVideo,
                            nextVideo: this.nextVideo,
                        }}
                    />
            </Container>
        );
    }
}

export default VideoPlayer;
